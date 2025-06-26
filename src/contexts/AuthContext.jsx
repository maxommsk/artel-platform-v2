import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Роли пользователей
  const roles = {
    guest: { name: 'Гость', level: 0 },
    prospect: { name: 'Потенциальный клиент', level: 1 },
    candidate: { name: 'Кандидат в пайщики', level: 2 },
    member_accumulator: { name: 'Пайщик-накопитель', level: 3 },
    member_owner: { name: 'Пайщик-собственник', level: 4 },
    investor: { name: 'Инвестор', level: 5 },
    staff: { name: 'Сотрудник', level: 6 },
    admin: { name: 'Администратор', level: 7 }
  };

  // Проверка сохраненного пользователя при загрузке
  useEffect(() => {
    const savedUser = localStorage.getItem('artel_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Вход в систему
  const login = async (email, password) => {
    try {
      // --- Имитация API запроса к серверу для входа ---
      // В реальном приложении здесь будет fetch/axios запрос к вашему бэкенду, например:
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || 'Ошибка сервера');
      // }
      // return { success: true, user: data.user }; // Сервер возвращает данные пользователя

      // Демо-логика для имитации ответа сервера
      const response = await new Promise(resolve => setTimeout(() => {
        const demoUsers = {
          'client@artel.ru': {
            id: 1,
            email: 'client@artel.ru',
            name: 'Иван Петров',
            role: 'prospect',
            avatar: null
          },
          'member@artel.ru': {
            id: 2,
            email: 'member@artel.ru',
            name: 'Мария Сидорова',
            role: 'member_accumulator',
            avatar: null,
            savings: 1250000,
            target: 5000000
          },
          'admin@artel.ru': {
            id: 3,
            email: 'admin@artel.ru',
            name: 'Администратор',
            role: 'admin',
            avatar: null
          }
        };

        const userData = demoUsers[email];
        if (userData && password === '123456') {
          resolve({
            ok: true,
            json: () => Promise.resolve(userData) // Имитация успешного JSON ответа
          });
        } else {
          resolve({
            ok: false,
            status: 401,
            json: () => Promise.resolve({ message: 'Неверный email или пароль' }) // Имитация ошибки JSON ответа
          });
        }
      }, 1000)); // Имитация задержки сети

      const data = await response.json();

      if (response.ok) {
        setUser(data); // data теперь содержит объект пользователя из имитированного ответа
        localStorage.setItem('artel_user', JSON.stringify(data));
        return { success: true };
      } else {
        throw new Error(data.message || 'Произошла ошибка при входе');
      }
    } catch (error) {
      // Ошибка сети или другая непредвиденная ошибка
      return { success: false, error: error.message || 'Произошла ошибка при входе' };
    }
  };

  // Регистрация
  const register = async (userData) => {
    try {
      // --- Имитация API запроса к серверу для регистрации ---
      // В реальном приложении здесь будет fetch/axios запрос к вашему бэкенду, например:
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData), // Отправляем данные для регистрации
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || 'Ошибка сервера');
      // }
      // return { success: true, user: data.user }; // Сервер возвращает данные нового пользователя

      // Демо-логика для имитации ответа сервера
      const response = await new Promise(resolve => setTimeout(() => {
        const newUser = {
          id: Date.now(),
          ...userData,
          role: 'prospect', // Новые пользователи начинают как потенциальные клиенты
          avatar: null
        };
        resolve({
          ok: true,
          json: () => Promise.resolve(newUser) // Имитация успешного JSON ответа
        });
      }, 1000)); // Имитация задержки сети

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        localStorage.setItem('artel_user', JSON.stringify(data));
        return { success: true };
      } else {
        throw new Error(data.message || 'Произошла ошибка при регистрации');
      }
    } catch (error) {
      return { success: false, error: error.message || 'Произошла ошибка при регистрации' };
    }
  };

  // Выход из системы
  const logout = () => {
    setUser(null);
    localStorage.removeItem('artel_user');
  };

  // Обновление профиля
  const updateProfile = (updates) => {
    // В реальном приложении здесь также потребуется API запрос к серверу
    // Например: fetch('/api/user/profile', { method: 'PUT', body: JSON.stringify(updates) })
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('artel_user', JSON.stringify(updatedUser));
  };

  // Проверка роли
  const hasRole = (requiredRole) => {
    if (!user) return false;
    const userLevel = roles[user.role]?.level || 0;
    const requiredLevel = roles[requiredRole]?.level || 0;
    return userLevel >= requiredLevel;
  };

  const value = {
    user,
    loading,
    roles,
    login,
    register,
    logout,
    updateProfile,
    hasRole,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
