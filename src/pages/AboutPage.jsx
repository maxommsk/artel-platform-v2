import { 
  Building2, 
  Users, 
  Shield, 
  TrendingUp, 
  Award, 
  CheckCircle,
  Heart,
  Target,
  Clock,
  Star
} from 'lucide-react';
import PageTitle from '../components/PageTitle';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Довольных клиентов', value: '1000+', color: 'blue' },
    { icon: Building2, label: 'Квартир приобретено', value: '500+', color: 'green' },
    { icon: TrendingUp, label: 'Средняя экономия', value: '8 млн ₽', color: 'purple' },
    { icon: Shield, label: 'Лет надежности', value: '15', color: 'yellow' }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Лицензия ЦБ РФ, страхование средств пайщиков, прозрачная отчетность'
    },
    {
      icon: Heart,
      title: 'Честность',
      description: 'Никаких скрытых комиссий, переплат и кабальных условий'
    },
    {
      icon: TrendingUp,
      title: 'Выгода',
      description: 'Экономия до 8 млн рублей по сравнению с ипотекой'
    },
    {
      icon: Target,
      title: 'Поддержка',
      description: 'Персональное сопровождение на всех этапах приобретения жилья'
    }
  ];

  const timeline = [
    { year: '2009', event: 'Основание кооператива', description: 'Получение первых лицензий' },
    { year: '2012', event: 'Первые 100 семей', description: 'Достижение важной вехи' },
    { year: '2016', event: 'Расширение географии', description: 'Открытие филиалов в регионах' },
    { year: '2020', event: 'Цифровизация', description: 'Запуск онлайн-платформы' },
    { year: '2024', event: 'Лидер рынка', description: 'Более 1000 довольных семей' }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: '15 лет в сфере ЖНК',
      description: 'Основатель кооператива, эксперт в области жилищного строительства и финансов.'
    },
    {
      name: 'Елена Сидорова',
      position: 'Финансовый директор',
      experience: '12 лет в банковской сфере',
      description: 'Отвечает за финансовую стратегию и управление средствами пайщиков.'
    },
    {
      name: 'Михаил Иванов',
      position: 'Директор по развитию',
      experience: '10 лет в недвижимости',
      description: 'Отвечает за поиск и анализ объектов недвижимости, ведет переговоры с застройщиками и девелоперами.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageTitle 
        title="О кооперативе" 
        description="ЖНК АРТЕЛЬ - 15 лет помогаем людям приобретать жилье без переплат. Наша миссия, ценности, команда и достижения. Узнайте больше о надежном партнере в сфере недвижимости."
      />
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              О кооперативе <span className="text-yellow-400">АРТЕЛЬ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              15 лет помогаем людям приобретать жилье без переплат и кабальных условий ипотеки
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">1000+</span>
                <p className="text-sm">Довольных семей</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">500+</span>
                <p className="text-sm">Квартир приобретено</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">8 млн ₽</span>
                <p className="text-sm">Средняя экономия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Миссия */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Мы верим, что каждая семья заслуживает собственное жилье без кабальных условий банковских кредитов. 
                Наша миссия — предоставить честную, прозрачную и выгодную альтернативу ипотеке через систему 
                жилищно-накопительного кооператива.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                За 15 лет работы мы помогли более чем 1000 семьям обрести собственное жилье, сэкономив им 
                миллиарды рублей на процентах и комиссиях. Мы продолжаем развиваться, внедряя современные 
                технологии для максимального удобства наших пайщиков.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Лицензия ЦБ РФ</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Страхование средств пайщиков</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Почему выбирают АРТЕЛЬ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Мы предлагаем честные и выгодные условия для приобретения жилья
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* История */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              История развития
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              15 лет роста и достижений
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.event}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Профессионалы с многолетним опытом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {member.experience}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать путь к собственному жилью?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Присоединяйтесь к более чем 1000 семьям, которые уже обрели свой дом с помощью АРТЕЛЬ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Стать пайщиком
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
