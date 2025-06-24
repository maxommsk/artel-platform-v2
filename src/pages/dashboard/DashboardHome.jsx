import { useAuth } from '../../contexts/AuthContext';
import { 
  PiggyBank, 
  Building, 
  TrendingUp, 
  Users, 
  Calendar,
  Bell,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

const DashboardHome = () => {
  const { user, roles } = useAuth();

  // Данные для разных ролей
  const getRoleSpecificData = () => {
    switch (user?.role) {
      case 'prospect':
        return {
          title: 'Добро пожаловать в ЖНК АРТЕЛЬ!',
          subtitle: 'Начните свой путь к собственному жилью',
          stats: [
            { label: 'Доступных программ', value: '3', icon: Building, color: 'blue' },
            { label: 'Средний срок накопления', value: '8 лет', icon: Calendar, color: 'green' },
            { label: 'Экономия vs ипотека', value: '40%', icon: TrendingUp, color: 'yellow' }
          ],
          actions: [
            { title: 'Подать заявку', description: 'Начните процесс вступления в кооператив', link: '/dashboard/application', urgent: true },
            { title: 'Изучить программы', description: 'Выберите подходящую программу накопления', link: '/dashboard/programs', urgent: false }
          ]
        };

      case 'member_accumulator':
        return {
          title: `Добро пожаловать, ${user.name}!`,
          subtitle: 'Ваши накопления растут каждый день',
          stats: [
            { label: 'Накоплено', value: `${(user.savings || 0).toLocaleString()} ₽`, icon: PiggyBank, color: 'green' },
            { label: 'Цель', value: `${(user.target || 0).toLocaleString()} ₽`, icon: Building, color: 'blue' },
            { label: 'Прогресс', value: `${Math.round(((user.savings || 0) / (user.target || 1)) * 100)}%`, icon: TrendingUp, color: 'yellow' }
          ],
          actions: [
            { title: 'Пополнить счет', description: 'Внести очередной платеж', link: '/dashboard/payments', urgent: true },
            { title: 'Выбрать квартиру', description: 'Просмотреть доступные объекты', link: '/dashboard/properties', urgent: false }
          ]
        };

      case 'admin':
        return {
          title: 'Панель администратора',
          subtitle: 'Управление кооперативом',
          stats: [
            { label: 'Всего клиентов', value: '1,247', icon: Users, color: 'blue' },
            { label: 'Активных заявок', value: '23', icon: Clock, color: 'yellow' },
            { label: 'Объектов в работе', value: '8', icon: Building, color: 'green' }
          ],
          actions: [
            { title: 'Новые заявки', description: 'Обработать заявки клиентов', link: '/dashboard/clients', urgent: true },
            { title: 'Финансовые отчеты', description: 'Просмотреть отчетность', link: '/dashboard/reports', urgent: false }
          ]
        };

      default:
        return {
          title: 'Личный кабинет',
          subtitle: 'Добро пожаловать!',
          stats: [],
          actions: []
        };
    }
  };

  const data = getRoleSpecificData();

  const StatCard = ({ stat }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {stat.label}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {stat.value}
          </p>
        </div>
        <div className={`p-3 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
          <stat.icon className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
        </div>
      </div>
    </div>
  );

  const ActionCard = ({ action }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {action.title}
            </h3>
            {action.urgent && (
              <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-xs px-2 py-1 rounded-full">
                Важно
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {action.description}
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 ml-4" />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Заголовок */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {data.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {data.subtitle}
        </p>
      </div>

      {/* Роль пользователя */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-300 font-medium">
            Ваша роль: {roles[user?.role]?.name}
          </span>
        </div>
      </div>

      {/* Статистика */}
      {data.stats.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Основные показатели
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      )}

      {/* Быстрые действия */}
      {data.actions.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Быстрые действия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.actions.map((action, index) => (
              <a key={index} href={action.link} className="block">
                <ActionCard action={action} />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Уведомления */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-4">
          <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Уведомления
          </h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                Обновление системы
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Планируется техническое обслуживание 25 декабря с 02:00 до 04:00
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                Добро пожаловать!
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Ваш аккаунт успешно создан. Изучите возможности личного кабинета.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
