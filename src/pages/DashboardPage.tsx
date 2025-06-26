import React, { useState, useEffect } from 'react'; // Добавлено React
import { useNavigate } from 'react-router-dom';
import {
  Home,
  User as UserIcon, // Переименовано, чтобы избежать конфликта с интерфейсом User
  Settings,
  LogOut,
  Bell,
  Search,
  Calendar,
  TrendingUp,
  Users,
  Building2,
  CreditCard,
  FileText,
  Shield,
  BarChart3,
  PieChart,
  Activity,
  DollarSign,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  Menu,
  X
} from 'lucide-react';
import PageTitle from '../components/PageTitle'; // Убедитесь, что это импортируется из .tsx
import { useAuth, User, Roles } from '../contexts/AuthContext'; // Импортируем User и Roles из AuthContext.tsx

// Интерфейс для элементов меню
interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType; // Тип для компонента иконки
}

const DashboardPage: React.FC = () => { // Изменено
  const navigate = useNavigate();
  const { user: authUser, logout } = useAuth(); // Получаем пользователя из AuthContext
  const [user, setUser] = useState<User | null>(null); // Локальное состояние пользователя
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // Типизация
  const [activeTab, setActiveTab] = useState<string>('overview'); // Типизация

  useEffect(() => {
    // Используем пользователя из AuthContext
    if (authUser) {
      setUser(authUser);
    } else {
      // Если пользователя нет в AuthContext, перенаправляем на логин
      navigate('/login');
    }
  }, [authUser, navigate]); // Зависимости useEffect

  const handleLogout = () => {
    logout(); // Используем logout из AuthContext
    navigate('/');
  };

  if (!user) {
    return <div>Загрузка...</div>;
  }

  // Меню для разных ролей
  const getMenuItems = (role: keyof Roles): MenuItem[] => { // Типизация
    const baseItems: MenuItem[] = [
      { id: 'overview', label: 'Главная', icon: Home }
    ];

    switch (role) {
      case 'prospect': // Используем 'prospect' вместо 'client'
        return [
          ...baseItems,
          { id: 'programs', label: 'Программы', icon: Target },
          { id: 'calculator', label: 'Калькулятор', icon: BarChart3 },
          { id: 'consultation', label: 'Консультация', icon: Users },
          { id: 'profile', label: 'Профиль', icon: UserIcon } // Используем переименованную иконку
        ];

      case 'member_accumulator': // Используем 'member_accumulator' вместо 'member'
      case 'member_owner':
        return [
          ...baseItems,
          { id: 'savings', label: 'Накопления', icon: TrendingUp },
          { id: 'payments', label: 'Платежи', icon: CreditCard },
          { id: 'documents', label: 'Документы', icon: FileText },
          { id: 'properties', label: 'Объекты', icon: Building2 },
          { id: 'profile', label: 'Профиль', icon: UserIcon } // Используем переименованную иконку
        ];

      case 'admin':
        return [
          ...baseItems,
          { id: 'clients', label: 'Клиенты', icon: Users },
          { id: 'reports', label: 'Отчеты', icon: BarChart3 },
          { id: 'finance', label: 'Финансы', icon: DollarSign },
          { id: 'administration', label: 'Администрирование', icon: Settings }
        ];

      default:
        return baseItems;
    }
  };

  // Контент для разных ролей
  const renderContent = (): JSX.Element => { // Типизация
    if (activeTab === 'overview') {
      return renderOverview();
    }

    const currentMenuItem = getMenuItems(user.role).find(item => item.id === activeTab);

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {currentMenuItem?.label}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-400">
            Содержимое раздела "{currentMenuItem?.label}" будет добавлено в следующих версиях.
          </p>
        </div>
      </div>
    );
  };

  const renderOverview = (): JSX.Element => { // Типизация
    switch (user.role) {
      case 'prospect': // Используем 'prospect'
        return (
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Добро пожаловать, {user.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Изучите наши программы накопления и выберите подходящую для вас
              </p>
            </div>

            {/* Статистика для потенциального клиента */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Доступно программ</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Средняя экономия</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">8.2 млн ₽</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Срок накопления</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">3-7 лет</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Быстрые действия */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Быстрые действия</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-900 dark:text-white">Рассчитать накопления</span>
                </button>
                <button className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-gray-900 dark:text-white">Записаться на консультацию</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'member_accumulator': // Используем 'member_accumulator'
      case 'member_owner':
        return (
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Личный кабинет пайщика
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Отслеживайте прогресс накоплений и управляйте своими взносами
              </p>
            </div>

            {/* Статистика накоплений */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Накоплено</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {user.savings ? user.savings.toLocaleString() : 'N/A'} ₽
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Цель</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {user.target ? user.target.toLocaleString() : 'N/A'} ₽
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Прогресс</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {user.savings && user.target ? Math.round((user.savings / user.target) * 100) : '0'}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">До цели</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">N/A</p> {/* Здесь нужна более сложная логика */}
                  </div>
                </div>
              </div>
            </div>

            {/* Прогресс накопления */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Прогресс накопления</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full" style={{width: `${user.savings && user.target ? Math.round((user.savings / user.target) * 100) : 0}%`}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>{user.savings ? user.savings.toLocaleString() : '0'} ₽</span>
                <span>{user.target ? user.target.toLocaleString() : '0'} ₽</span>
              </div>
            </div>

            {/* Последние операции */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Последние операции</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Ежемесячный взнос</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">15 июня 2025</p>
                    </div>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-medium">+50 000 ₽</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Ежемесячный взнос</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">15 мая 2025</p>
                    </div>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-medium">+50 000 ₽</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'admin':
        return (
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Панель администратора
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Управление кооперативом
              </p>
            </div>

            {/* Основные показатели */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Всего клиентов</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Активных заявок</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">23</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Объектов в работе</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Успешных сделок</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">99%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Быстрые действия */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Быстрые действия</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-gray-900 dark:text-white">Новые заявки</span>
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                  </button>
                  <button className="w-full flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                    <BarChart3 className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                    <span className="text-gray-900 dark:text-white">Финансовые отчеты</span>
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Уведомления</h3>
                <div className="space-y-3">
                  <div className="flex items-start p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Обновление системы</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Запланировано на 25 декабря в 02:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Неизвестная роль пользователя</div>;
    }
  };

  const menuItems = getMenuItems(user.role);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageTitle
        title="Личный кабинет"
        description="Личный кабинет ЖНК АРТЕЛЬ - управление накоплениями, отслеживание прогресса, документооборот и персональные рекомендации."
      />

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Личный кабинет</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex-1 px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <UserIcon className="h-5 w-5 text-white" /> {/* Используем переименованную иконку */}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Выйти
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between h-16 px-6">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  />
                </div>

                <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Bell className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto">
            {renderContent()}
          </main>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardPage;
