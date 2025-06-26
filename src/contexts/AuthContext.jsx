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
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Если вход успешен, сохраняем данные пользователя из ответа API
        // data.user будет содержать объединенные данные из auth.users и profiles
        setUser(data.user);
        localStorage.setItem('artel_user', JSON.stringify(data.user));
        return { success: true };
      } else {
        // Если API вернуло ошибку
        throw new Error(data.error || 'Произошла ошибка при входе');
      }
    } catch (error) {
      // Ошибка сети или другая непредвиденная ошибка
      return { success: false, error: error.message || 'Произошла ошибка при входе' };
    }
  };

  // Регистрация
  const register = async (userData) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData), // Отправляем данные для регистрации (email, password, name)
      });

      const data = await response.json();

      if (response.ok) {
        // Если регистрация успешна, сохраняем данные пользователя из ответа API
        setUser(data.user);
        localStorage.setItem('artel_user', JSON.stringify(data.user));
        return { success: true };
      } else {
        // Если API вернуло ошибку
        throw new Error(data.error || 'Произошла ошибка при регистрации');
      }
    } catch (error) {
      // Ошибка сети или другая непредвиденная ошибка
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
