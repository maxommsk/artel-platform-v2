import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Секция 1: О компании */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">ЖНК АРТЕЛЬ</h3>
          <p className="text-sm">
            Жилищный накопительный кооператив "АРТЕЛЬ" - ваш надежный партнер на пути к собственному жилью. Мы предлагаем прозрачные и выгодные программы накопления.
          </p>
        </div>

        {/* Секция 2: Быстрые ссылки */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Быстрые ссылки</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link></li>
            <li><Link to="/calculator" className="hover:text-blue-400 transition-colors">Калькулятор</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">О кооперативе</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Контакты</Link></li>
            <li><Link to="/login" className="hover:text-blue-400 transition-colors">Личный кабинет</Link></li>
          </ul>
        </div>

        {/* Секция 3: Контакты */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Контакты</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-blue-400" />
              <a href="mailto:info@artel.ru" className="hover:text-blue-400 transition-colors">info@artel.ru</a>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-blue-400" />
              <a href="tel:+78001234567" className="hover:text-blue-400 transition-colors">+7 (800) 123-45-67</a>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
              <span>г. Москва, ул. Примерная, д. 10</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} ЖНК АРТЕЛЬ. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
