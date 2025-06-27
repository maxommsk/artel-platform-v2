import { Link, useLocation } from 'react-router-dom'
import { useAuth, Roles } from '../../contexts/AuthContext'
import {
  Home,
  User,
  FileText,
  PiggyBank,
  Building,
  TrendingUp,
  Users,
  Settings,
  HelpCircle,
  X,
  Shield,
  CreditCard,
  Calendar,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void
}

interface MenuItem {
  path: string
  icon: React.ElementType
  label: string
  roles: (keyof Roles | 'all')[]
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const { user, roles } = useAuth()
  const location = useLocation();

  // Helper function to filter menu items by user role
  // Перемещена за пределы getMenuItems для лучшей структуры и ясности
  const filterByRole = (items: MenuItem[]) => {
    return items.filter(item =>
      item.roles.includes('all') || (user ? item.roles.includes(user.role) : false)
    ); // <-- Добавлена точка с запятой
  };

  // Меню для разных ролей
  const getMenuItems = () => {
    const baseItems: MenuItem[] = [
      { path: '/dashboard', icon: Home, label: 'Главная', roles: ['all'] },
      { path: '/dashboard/profile', icon: User, label: 'Профиль', roles: ['all'] }
    ];

    const roleSpecificItems: MenuItem[] = [
      // Потенциальный клиент
      { path: '/dashboard/application', icon: FileText, label: 'Подать заявку', roles: ['prospect'] },
      { path: '/dashboard/programs', icon: Building, label: 'Программы', roles: ['prospect'] },

      // Кандидат в пайщики
      { path: '/dashboard/documents', icon: FileText, label: 'Документы', roles: ['candidate', 'member_accumulator', 'member_owner'] },
      { path: '/dashboard/status', icon: Shield, label: 'Статус заявки', roles: ['candidate'] },

      // Пайщик-накопитель
      { path: '/dashboard/savings', icon: PiggyBank, label: 'Накопления', roles: ['member_accumulator', 'member_owner'] },
      { path: '/dashboard/payments', icon: CreditCard, label: 'Платежи', roles: ['member_accumulator', 'member_owner'] },
      { path: '/dashboard/properties', icon: Building, label: 'Недвижимость', roles: ['member_accumulator', 'member_owner'] },

      // Пайщик-собственник
      { path: '/dashboard/property-management', icon: Settings, label: 'Управление жильем', roles: ['member_owner'] },

      // Инвестор
      { path: '/dashboard/investments', icon: TrendingUp, label: 'Инвестиции', roles: ['investor'] },
      { path: '/dashboard/analytics', icon: BarChart3, label: 'Аналитика', roles: ['investor'] },

      // Сотрудники и админы
      { path: '/dashboard/clients', icon: Users, label: 'Клиенты', roles: ['staff', 'admin'] },
      { path: '/dashboard/reports', icon: BarChart3, label: 'Отчеты', roles: ['staff', 'admin'] },
      { path: '/dashboard/admin', icon: Settings, label: 'Администрирование', roles: ['admin'] }
    ];

    const supportItems: MenuItem[] = [
      { path: '/dashboard/support', icon: HelpCircle, label: 'Поддержка', roles: ['all'] }
    ];

    return {
      main: [...baseItems, ...filterByRole(roleSpecificItems)],
      support: filterByRole(supportItems)
    };
  };

  const menuItems = getMenuItems();

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

 const MenuItem: React.FC<{ item: MenuItem }> = ({ item }) => (
    <Link
      to={item.path}
      onClick={onClose}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
        ${isActive(item.path)
          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }
      `}
    >
      <item.icon className="h-5 w-5" />
      <span className="font-medium">{item.label}</span>
    </Link>
  );

  return (
    <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Заголовок */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Личный кабинет
          </h2>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Информация о пользователе */}
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10
