import { createClient } from '@supabase/supabase-js';

// Инициализация Supabase клиента
// Эти переменные будут получены из переменных окружения Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Используем service_role_key для бэкенда

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // 1. Регистрация пользователя в Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.error('Supabase Auth Error:', authError);
      return res.status(400).json({ error: authError.message });
    }

    // Если пользователь уже существует, но не подтвержден, Supabase вернет user: null, session: null
    // и authError будет null. Нужно проверить user.
    if (!authData.user) {
        return res.status(400).json({ error: 'User already exists or email confirmation required.' });
    }

    // 2. Создание профиля пользователя в таблице 'profiles'
    // Supabase автоматически свяжет id из auth.users с id в profiles благодаря default value auth.uid()
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .insert([
        { 
          id: authData.user.id, // Явно указываем id
          email: authData.user.email, 
          name: name || 'Новый пользователь', // Используем переданное имя или дефолтное
          role: 'prospect' // Роль по умолчанию
        }
      ]);

    if (profileError) {
      // Если создание профиля не удалось, возможно, стоит удалить пользователя из auth.users
      // Это более сложная логика, для простоты пока просто вернем ошибку
      console.error('Supabase Profile Error:', profileError);
      return res.status(500).json({ error: profileError.message || 'Failed to create user profile.' });
    }

    // Возвращаем данные пользователя и сессию (если она есть)
    res.status(200).json({ 
      message: 'User registered successfully. Please check your email for verification.',
      user: authData.user,
      session: authData.session // Сессия будет null, если требуется подтверждение email
    });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
