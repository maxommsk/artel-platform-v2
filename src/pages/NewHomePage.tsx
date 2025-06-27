import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTier } from '../contexts/TierContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import TierSelector from '../components/TierSelector';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Users, 
  Building2, 
  Calculator,
  CheckCircle,
  Star,
  Zap,
  Crown,
  Sparkles
} from 'lucide-react';

const NewHomePage: React.FC = () => {
  const { selectedTier, getTariffsByTier, getTierConfig } = useTier();
  const [showTierSelector, setShowTierSelector] = useState<boolean>(false);

  const features = [
    {
      icon: Shield,
      title: 'Блокчейн-безопасность',
      description: 'Прозрачность всех операций и защита ваших средств'
    },
    {
      icon: TrendingUp,
      title: 'КВМ-токены',
      description: 'Уникальная система токенизации квадратных метров'
    },
    {
      icon: Crown,
      title: 'Два уровня сервиса',
      description: 'СТАРТ для всех и ЭЛИТ для премиального сегмента'
    },
    {
      icon: Zap,
      title: 'Духовное развитие',
      description: 'Философия 16 конов мироздания увеличивает доходность'
    }
  ];

  const stats = [
    { value: '11,000+', label: 'Пайщиков в двух сегментах' },
    { value: '2,800+', label: 'Семей получили жилье' },
    { value: '18 млрд ₽', label: 'Активы под управлением' },
    { value: '99.9%', label: 'Довольных клиентов' }
  ];

  const tierConfig = getTierConfig(selectedTier);
  const currentTariffs = getTariffsByTier(selectedTier);

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto text-center text-white">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Революция в ЖНК: Двухуровневая система + КВМ-токены
              </Badge>
              
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
                Получите 
                <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent"> премиальное жилье</span>
                <br />без ипотеки
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
                Первый в мире ЖНК с философской основой, КВМ-токенами и двухуровневой системой 
                для разных слоев населения
              </p>

              {/* Выбор уровня */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="text-lg font-medium">Выберите ваш уровень:</div>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedTier === 'core' ? 'default' : 'outline'}
                      onClick={() => setShowTierSelector(true)}
                      className={selectedTier === 'core' ? 'bg-blue-600 hover:bg-blue-700' : 'border-white text-white hover:bg-white/10'}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      АРТЕЛЬ СТАРТ
                    </Button>
                    <Button
                      variant={selectedTier === 'elite' ? 'default' : 'outline'}
                      onClick={() => setShowTierSelector(true)}
                      className={selectedTier === 'elite' ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700' : 'border-white text-white hover:bg-white/10'}
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      АРТЕЛЬ ЭЛИТ
                    </Button>
                  </div>
                </div>

                <div className={`inline-flex items-center px-4 py-2 rounded-full ${tierConfig.bgColor} ${tierConfig.borderColor} border`}>
                  <span className={`font-medium ${tierConfig.textColor}`}>
                    Выбран: {tierConfig.name} - {tierConfig.description}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/calculator">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 text-lg px-8">
                    <Calculator className="w-5 h-5 mr-2" />
                    Рассчитать накопления
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
                  onClick={() => setShowTierSelector(true)}
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Выбрать тариф
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Почему выбирают АРТЕЛЬ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мы объединили лучшие традиции кооперативного движения 
              с современными технологиями и философской мудростью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 w-fit">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Тарифы {tierConfig.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {selectedTier === 'elite' 
                ? 'Премиальные условия для среднего класса с эксклюзивными возможностями'
                : 'Гибкие условия для разных потребностей и возможностей'
              }
            </p>
            
            <div className="mt-6">
              <Button 
                variant="outline" 
                onClick={() => setShowTierSelector(true)}
                className="text-slate-600 border-slate-300 hover:bg-slate-100"
              >
                Сменить уровень
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentTariffs.map((tariff, index) => (
              <Card 
                key={tariff.id} 
                className={`relative ${tariff.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{tariff.name}</CardTitle>
                  <CardDescription className="text-base">
                    {tariff.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Первоначальный взнос:</span>
                      <span className="font-bold">{tariff.initialPayment}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Срок накопления:</span>
                      <span className="font-bold">{tariff.duration} месяцев</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Коэффициент:</span>
                      <span className="font-bold">{tariff.coefficient}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>От:</span>
                      <span className="font-bold text-lg">
                        {tariff.minMonthlyPayment.toLocaleString()}₽/мес
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {tariff.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        {selectedTier === 'elite' ? (
                          <Star className="h-5 w-5 text-amber-500 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        )}
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${
                      tariff.popular 
                        ? selectedTier === 'elite'
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700'
                          : 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    Выбрать тариф
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс получения квартиры */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Как получить квартиру?
            </h2>
            <p className="text-xl text-slate-600">
              Простой и прозрачный процесс в 4 шага
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Регистрация',
                description: 'Подайте заявку онлайн и выберите подходящий тариф'
              },
              {
                step: '02',
                title: 'Выбор тарифа',
                description: 'Выберите подходящий тариф и уровень сервиса'
              },
              {
                step: '03',
                title: 'Накопление',
                description: 'Делайте регулярные взносы и получайте КВМ-токены'
              },
              {
                step: '04',
                title: 'Получение',
                description: 'Получите ключи от своей новой квартиры'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Начните свой путь к новому жилью уже сегодня
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Присоединяйтесь к тысячам семей, которые уже получили квартиры через АРТЕЛЬ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
                  <Calculator className="w-5 h-5 mr-2" />
                  Рассчитать накопления
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
                onClick={() => setShowTierSelector(true)}
              >
                <Crown className="w-5 h-5 mr-2" />
                Выбрать уровень
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно выбора уровня */}
      {showTierSelector && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Выберите ваш уровень</h2>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowTierSelector(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  ✕
                </Button>
              </div>
              <TierSelector onTierSelect={() => setShowTierSelector(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewHomePage;
