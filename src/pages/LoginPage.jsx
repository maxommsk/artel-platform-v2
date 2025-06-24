import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  Users, 
  UserCheck,
  LogIn
} from 'lucide-react';
import PageTitle from '../components/PageTitle';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const demoAccounts = [
    {
      email: 'client@artel.ru',
      password: '123456',
      role: 'client',
      name: 'Иван Петров',
      description: 'Потенциальный клиент'
    },
    {
      email: 'member@artel.ru',
      password: '123456',
      role: 'member',
      name: 'Анна Сидорова',
      description: 'Пайщик-накопитель'
    },
    {
      email: 'admin@artel.ru',
      password: '123456',
      role: 'admin',
      name: 'Администратор',
      description: 'Администратор системы'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDemoLogin = (account) => {
    setFormData({
      email: account.email,
      password: account.password
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Имитация проверки логина
    setTimeout(() => {
      const account = demoAccounts.find(
        acc => acc.email === formData.email && acc.password === formData.password
      );

      if (account) {
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem('user', JSON.stringify({
          email: account.email,
          role: account.role,
          name: account.name
        }));
        
        // Перенаправляем в личный кабинет
        navigate('/dashboard');
      } else {
        alert('Неверный email или пароль');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'client': return Users;
      case 'member': return UserCheck;
      case 'admin': return Shield;
      default: return Users;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'client': return 'blue';
      case 'member': return 'green';
      case 'admin': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageTitle 
        title="Вход в личный кабинет" 
        description="Войдите в личный кабинет ЖНК АРТЕЛЬ для управления накоплениями, отслеживания прогресса и получения персональных рекомендаций."
      />
      
      <div className="min-h-screen flex">
        {/* Левая часть - форма входа */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                Вход в личный кабинет
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Войдите в свой аккаунт для доступа к персональным данным
              </p>
            </div>

            <div className="mt-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white sm:text-sm"
                      placeholder="Введите пароль"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                      Запомнить меня
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Забыли пароль?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LogIn className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
                    </span>
                    {isLoading ? 'Вход...' : 'Войти'}
                  </button>
                </div>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500">
                        Нет аккаунта?
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Зарегистрироваться
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Правая часть - демо аккаунты */}
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex flex-col justify-center p-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Демо аккаунты для тестирования</h3>
              <p className="text-blue-100 mb-8">
                Используйте эти аккаунты для ознакомления с функциональностью личного кабинета
              </p>
              
              <div className="space-y-4">
                {demoAccounts.map((account, index) => {
                  const Icon = getRoleIcon(account.role);
                  const color = getRoleColor(account.role);
                  
                  return (
                    <div
                      key={index}
                      onClick={() => handleDemoLogin(account)}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-${color}-500 rounded-lg flex items-center justify-center mr-4`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{account.name}</h4>
                          <p className="text-blue-100 text-sm">{account.description}</p>
                          <p className="text-blue-200 text-xs mt-1">
                            {account.email} / {account.password}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Безопасность
                </h4>
                <p className="text-blue-100 text-sm">
                  Ваши данные защищены современными методами шифрования. 
                  Мы используем двухфакторную аутентификацию и регулярно 
                  проводим аудит безопасности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
