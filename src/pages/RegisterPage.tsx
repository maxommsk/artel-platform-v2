import React, { useState } from 'react'; // Добавлено React
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, LogIn } from 'lucide-react';
import PageTitle from '../components/PageTitle'; // Убедитесь, что это импортируется из .tsx
import { useAuth } from '../contexts/AuthContext'; // Убедитесь, что это импортируется из .tsx

const RegisterPage: React.FC = () => { // Изменено
  const navigate = useNavigate();
  const { register } = useAuth(); // Получаем функцию register из контекста
  const [formData, setFormData] = useState({ // Типизация выводится автоматически, но можно явно указать: useState<{ name: string; email: string; password: string; }>
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false); // Добавлена типизация
  const [error, setError] = useState<string>(''); // Добавлена типизация
  const [successMessage, setSuccessMessage] = useState<string>(''); // Добавлена типизация

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Добавлена типизация
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => { // Добавлена типизация
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    const result = await register(formData);

    if (result.success) {
      setSuccessMessage('Регистрация успешна! Пожалуйста, проверьте вашу почту для подтверждения.');
      // Опционально: перенаправить пользователя после небольшой задержки
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      setError(result.error || 'Произошла неизвестная ошибка при регистрации.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageTitle
        title="Регистрация"
        description="Создайте новый аккаунт в ЖНК АРТЕЛЬ для доступа ко всем возможностям."
      />

      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Создать новый аккаунт
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Уже есть аккаунт?{' '}
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Войти
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Поле для имени */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Ваше имя
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white sm:text-sm"
                  placeholder="Ваше имя"
                />
              </div>
            </div>

            {/* Поле для email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email адрес
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white sm:text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Поле для пароля */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Пароль
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white sm:text-sm"
                  placeholder="Введите пароль"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="text-green-500 text-sm text-center">
                {successMessage}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LogIn className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
                </span>
                {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
