import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Building2,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';
import PageTitle from '../components/PageTitle';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имитация отправки формы
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '8 (800) 123-45-67',
      description: 'Бесплатно по России',
      action: 'tel:+78001234567'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@artel.ru',
      description: 'Ответим в течение часа',
      action: 'mailto:info@artel.ru'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+7 (999) 123-45-67',
      description: 'Быстрые ответы',
      action: 'https://wa.me/79991234567'
    },
    {
      icon: Calendar,
      title: 'Запись на встречу',
      value: 'Онлайн консультация',
      description: 'Удобное время',
      action: '#'
    }
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Тверская, 15, офис 301',
      phone: '+7 (495 ) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00',
      metro: 'м. Тверская'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский пр., 28, офис 205',
      phone: '+7 (812) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00',
      metro: 'м. Невский проспект'
    },
    {
      city: 'Екатеринбург',
      address: 'ул. Ленина, 52, офис 410',
      phone: '+7 (343) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00',
      metro: 'м. Площадь 1905 года'
    }
  ];

  const faq = [
    {
      question: 'Как стать пайщиком ЖНК АРТЕЛЬ?',
      answer: 'Для вступления в кооператив необходимо подать заявление, внести вступительный взнос и выбрать программу накопления. Весь процесс занимает 1-2 дня.'
    },
    {
      question: 'Какие документы нужны для вступления?',
      answer: 'Паспорт гражданина РФ, СНИЛС, справка о доходах. Для семейных пар дополнительно свидетельство о браке.'
    },
    {
      question: 'Можно ли досрочно выйти из кооператива?',
      answer: 'Да, пайщик может выйти из кооператива в любое время. Накопленные средства возвращаются в полном объеме согласно уставу.'
    },
    {
      question: 'Как контролируется использование средств?',
      answer: 'Все операции проходят под контролем Центрального банка РФ. Ежемесячно публикуется отчетность, доступная всем пайщикам.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageTitle 
        title="Контакты" 
        description="Свяжитесь с ЖНК АРТЕЛЬ любым удобным способом. Телефон, email, WhatsApp, офисы в Москве, СПб, Екатеринбурге. Консультации и ответы на вопросы."
      />
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Свяжитесь с <span className="text-yellow-400">нами</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Мы готовы ответить на все ваши вопросы и помочь выбрать оптимальную программу накопления
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">24/7</span>
                <p className="text-sm">Онлайн поддержка</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">3</span>
                <p className="text-sm">Офиса в России</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">1 час</span>
                <p className="text-sm">Время ответа</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Способы связи */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Способы связи
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Выберите удобный способ связи с нами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {method.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {method.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Напишите нам
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Оставьте сообщение и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-2">
                Сообщение отправлено!
              </h3>
              <p className="text-green-600 dark:text-green-400">
                Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Сообщение *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Расскажите, чем мы можем помочь..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Отправить сообщение
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Офисы */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Наши офисы
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Приходите к нам на личную консультацию
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {office.city}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {office.address}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {office.metro}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="text-gray-900 dark:text-white">
                      {office.phone}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="text-gray-900 dark:text-white">
                      {office.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ответы на самые популярные вопросы
            </p>
          </div>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
