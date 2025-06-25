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
      description: 'Экономия до 8 млн рублей по сравнению с ипотечным кредитованием'
    },
    {
      icon: Target,
      title: 'Результат',
      description: 'Более 500 семей уже получили ключи от своих квартир'
    }
  ];

  const timeline = [
    { year: '2009', event: 'Основание кооператива', description: 'Создание ЖНК АРТЕЛЬ' },
    { year: '2012', event: 'Первые 100 квартир', description: 'Достижение важной вехи' },
    { year: '2018', event: 'Лицензия ЦБ РФ', description: 'Получение официального статуса' },
    { year: '2024', event: '1000+ довольных клиентов', description: 'Текущие достижения' }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: '15 лет в сфере недвижимости',
      description: 'Эксперт по жилищному кооперированию с многолетним опытом'
    },
    {
      name: 'Елена Сидорова',
      position: 'Финансовый директор',
      experience: '12 лет в банковской сфере',
      description: 'Специалист по накопительным программам и инвестициям'
    },
    {
      name: 'Михаил Иванов',
      position: 'Директор по развитию',
      experience: '10 лет в строительстве',
      description: 'Отвечает за поиск и анализ объектов недвижимости'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageTitle 
        title="О кооперативе" 
        description="Информация о ЖНК АРТЕЛЬ - история, миссия, команда и достижения кооператива."
      />

      {/* Hero секция */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            О кооперативе АРТЕЛЬ
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Мы помогаем людям приобретать жилье без кабальных условий ипотеки уже более 15 лет
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Миссия и ценности */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Наша миссия и ценности
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Мы создаем справедливую альтернативу ипотечному кредитованию
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Миссия</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Предоставить каждой семье возможность приобрести собственное жилье 
                на справедливых и выгодных условиях через систему накопительных программ, 
                основанную на принципах взаимопомощи и солидарности.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ценности</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Честность, прозрачность, взаимопомощь и социальная ответственность. 
                Мы верим, что жилье должно быть доступным для каждой семьи, 
                а финансовые услуги - понятными и справедливыми.
              </p>
            </div>
          </div>

          {/* Преимущества */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* История развития */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              История развития
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Путь от идеи до лидера рынка жилищного кооперирования
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.event}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Профессионалы с многолетним опытом в сфере недвижимости и финансов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
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

      {/* Статистика в цифрах */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              АРТЕЛЬ в цифрах
            </h2>
            <p className="text-xl text-blue-100">
              Наши достижения говорят сами за себя
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Квартир приобретено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-200">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Успешных сделок</div>
            </div>
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
