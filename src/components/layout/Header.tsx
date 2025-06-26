import React from 'react'; // Добавлено
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useAuth } from '../../contexts/AuthContext';
import { Home, Calculator, Phone, Info, KeyRound, User } from 'lucide-react';

const Header: React.FC = () => { // Изменено
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="ЖНК АРТЕЛЬ" className="h-8" />
          <span className="text-xl font-bold text-gray-900 dark:text-white hidden md:block">ЖНК АРТЕЛЬ</span>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
            <Home className="h-4 w-4 mr-1" /> Главная
          </Link>
          <Link to="/calculator" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
            <Calculator className="h-4 w-4 mr-1" /> Калькулятор
          </Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
            <Info className="h-4 w-4 mr-1" /> О кооперативе
          </Link>
          <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
            <Phone className="h-4 w-4 mr-1" /> Контакты
          </Link>
        </nav>

        {/* Кнопки входа/выхода/ЛК */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Button asChild variant="ghost" className="hidden md:flex">
                <Link to="/dashboard">
                  <User className="h-4 w-4 mr-2" /> Личный кабинет
                </Link>
              </Button>
              <Button onClick={handleLogout} variant="outline">
                Выйти
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link to="/login">
                <KeyRound className="h-4 w-4 mr-2" /> Войти
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
