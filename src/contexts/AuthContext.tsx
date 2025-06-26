import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'; // Добавлено React и ReactNode

// 1. Интерфейсы для ролей
interface Role {
  name: string;
  level: number;
}

interface Roles {
  guest: Role;
  prospect: Role;
  candidate: Role;
  member_accumulator: Role;
  member_owner: Role;
  investor: Role;
  staff: Role;
  admin: Role;
  [key: string]: Role; // Для доступа по строковому ключу
}

// 2. Интерфейс для объекта пользователя
interface User {
  id: number;
  email: string;
  name: string;
  role: keyof Roles; // Роль должна быть одним из ключей Roles
  avatar: string | null;
  savings?: number; // Опциональные поля для пайщика
  target?: number; // Опциональные поля для пайщика
  // Добавьте другие поля, если они есть в вашем объекте пользователя из Supabase
}

// 3. Интерфейс для контекста аутентификации
interface AuthContextType {
  user: User | null;
  loading: boolean;
  roles: Roles;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: { name: string; email: string; password: string }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void; // Partial<User> позволяет обновлять часть полей
  hasRole: (requiredRole: keyof Roles) => boolean;
  isAuthenticated: boolean;
}

// Создаем контекст с начальным значением null и утверждаем его тип
const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode; // Типизация для children
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => { // Изменено
  const [user, setUser] = useState<User | null>(null); // Типизация
  const [loading, setLoading] = useState<boolean>(true); // Типизация

  // Роли пользователей
  const roles: Roles = { // Типизация
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
      try {
        setUser(JSON.parse(savedUser) as User); // Утверждаем тип
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem('artel_user'); // Очищаем некорректные данные
      }
    }
    setLoading(false);
  }, []);

  // Вход в систему
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => { // Типизация
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user as User); // Утверждаем тип
        localStorage.setItem('artel_user', JSON.stringify(data.user));
        return { success: true };
      } else {
        throw new Error(data.error || 'Произошла ошибка при входе');
      }
    } catch (error: any) { // Типизация
      return { success: false, error: error.message || 'Произошла ошибка при входе' };
    }
  };

  // Регистрация
  const register = async (userData: { name: string; email: string; password: string }): Promise<{ success: boolean; error?: string }> => { // Типизация
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user as User); // Утверждаем тип
        localStorage.setItem('artel_user', JSON.stringify(data.user));
        return { success: true };
      } else {
        throw new Error(data.error || 'Произошла ошибка при регистрации');
      }
    } catch (error: any) { // Типизация
      return { success: false, error: error.message || 'Произошла ошибка при регистрации' };
    }
  };

  // Выход из системы
  const logout = () => {
    setUser(null);
    localStorage.removeItem('artel_user');
  };

  // Обновление профиля
  const updateProfile = (updates: Partial<User>) => { // Типизация
    const updatedUser = { ...user, ...updates } as User; // Утверждаем тип
    setUser(updatedUser);
    localStorage.setItem('artel_user', JSON.stringify(updatedUser));
  };

  // Проверка роли
  const hasRole = (requiredRole: keyof Roles): boolean => { // Типизация
    if (!user) return false;
    const userLevel = roles[user.role]?.level || 0;
    const requiredLevel = roles[requiredRole]?.level || 0;
    return userLevel >= requiredLevel;
  };

  const value: AuthContextType = { // Типизация
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
