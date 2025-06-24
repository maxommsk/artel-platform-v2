import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Shield, 
  TrendingUp, 
  Users, 
  Home, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import PageTitle from '../components/PageTitle';

const HomePage = () => {
  return (
    <div className="min-h-screen">
       <PageTitle 
        title="Главная" 
        description="ЖНК АРТЕЛЬ - современный жилищно-накопительный кооператив. Приобретайте жилье без переплат и кабальных условий ипотеки. Выгодные программы накопления."
      />
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ваше жилье без 
                <span className="text-yellow-400"> переплат</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                ЖНК АРТЕЛЬ поможет вам приобрести квартиру без ипотечных переплат. 
                Накапливайте средства выгодно и получите жилье быстрее!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/calculator"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Calculator className="h-5 w-5" />
                  <span>Рассчитать накопления</span>
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Экономия с АРТЕЛЬ</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Стоимость квартиры:</span>
                    <span className="font-bold">5 000 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Переплата по ипотеке 16%:</span>
                    <span className="font-bold text-red-300">5 500 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>С ЖНК АРТЕЛЬ:</span>
                    <span className="font-bold text-green-300">0 ₽</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Ваша экономия:</span>
                      <span className="text-yellow-400">5 500 000 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Квартир приобретено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-300">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-300">Успешных сделок</div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Почему выбирают АРТЕЛЬ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Мы предлагаем честные и выгодные условия для приобретения жилья
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Без переплат
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Никаких процентов и скрытых комиссий. Платите только стоимость квартиры.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Выгодные накопления
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ваши средства работают и приносят доход, ускоряя накопление на жилье.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Поддержка экспертов
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Персональный менеджер поможет на каждом этапе приобретения жилья.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Широкий выбор
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Более 100 объектов недвижимости в разных районах города.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 dark:bg-red-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Юридическая чистота
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Все сделки проходят полную юридическую проверку и сопровождение.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Прозрачность
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Полная отчетность и контроль за движением ваших средств.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы начать накопления?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Рассчитайте свою программу накоплений прямо сейчас
          </p>
          <Link 
            to="/calculator"
            className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Calculator className="h-5 w-5" />
            <span>Открыть калькулятор</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
