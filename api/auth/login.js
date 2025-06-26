import { createClient } from '@supabase/supabase-js';

// Инициализация Supabase клиента
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Используем service_role_key для бэкенда

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // 1. Вход пользователя через Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      console.error('Supabase Auth Error:', authError);
      return res.status(401).json({ error: authError.message });
    }

    // 2. Получение данных профиля из таблицы 'profiles'
    // Используем anon key для запроса к profiles, так как пользователь уже аутентифицирован
    // (хотя в данном случае мы используем service_role_key для простоты,
    // в реальном приложении лучше использовать клиентский Supabase SDK с anon key)
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authData.user.id)
      .single();

    if (profileError) {
      console.error('Supabase Profile Error:', profileError);
      return res.status(500).json({ error: profileError.message || 'Failed to retrieve user profile.' });
    }

    // Объединяем данные аутентификации и профиля
    const userWithProfile = {
      ...authData.user,
      ...profileData, // Добавляем поля из таблицы profiles (name, role, avatar_url и т.д.)
    };

    res.status(200).json({ 
      message: 'Login successful',
      user: userWithProfile,
      session: authData.session
    });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
