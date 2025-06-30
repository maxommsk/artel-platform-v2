import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PremiumButton } from '../components/ui/PremiumButton';
import { PremiumCard } from '../components/ui/PremiumCard';
import {
  Calculator,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const PremiumHomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Получите премиальное жилье без ипотеки",
      subtitle: "Первый в России ЖНК с философской основой и КВМ-токенами",
      image: "/images/hero-1.jpg"
    },
    {
      title: "Духовное развитие увеличивает доходность",
      subtitle: "16 конов мироздания как основа финансового благополучия",
      image: "/images/hero-2.jpg"
    },
    {
      title: "Блокчейн-прозрачность каждой операции",
      subtitle: "Полная прозрачность и безопасность ваших накоплений",
      image: "/images/hero-3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        {/* Background Video or Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-premium-gold" />
                <span className="text-white font-medium">
                  Революция в ЖНК: КВМ-токены + Духовное развитие
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/calculator">
                  <PremiumButton size="xl" variant="premium" icon={<Calculator />}>
                    Рассчитать накопления
                  </PremiumButton>
                </Link>
                <PremiumButton size="xl" variant="secondary" icon={<Building2 />}>
                  Смотреть объекты
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '5,000+', label: 'Довольных пайщиков', icon: Users },
              { value: '1,200+', label: 'Семей получили жилье', icon: Building2 },
              { value: '8.5 млрд ₽', label: 'Активы под управлением', icon: TrendingUp },
              { value: '99.8%', label: 'Уровень доверия', icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Почему выбирают АРТЕЛЬ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мы объединили лучшие традиции кооперативного движения с современными технологиями и философской мудростью
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Блокчейн-безопасность',
                description: 'Полная прозрачность всех операций и защита ваших средств на уровне банковских стандартов'
              },
              {
                icon: TrendingUp,
                title: 'КВМ-токены',
                description: 'Уникальная система токенизации квадратных метров с возможностью торговли и обмена'
              },
              {
                icon: Sparkles,
                title: 'Духовное развитие',
                description: 'Философия 16 конов мироздания увеличивает доходность до 45% через осознанные решения'
              },
              {
                icon: Users,
                title: 'Сообщество единомышленников',
                description: 'Присоединяйтесь к сообществу людей, стремящихся к духовному и материальному благополучию'
              },
              {
                icon: Building2,
                title: 'Премиальная недвижимость',
                description: 'Тщательно отобранные объекты в лучших районах с высоким потенциалом роста стоимости'
              },
              {
                icon: Star,
                title: 'Персональный подход',
                description: 'Индивидуальные консультации и персональные планы накопления для каждого пайщика'
              }
            ].map((feature, index) => (
              <PremiumCard key={index} hover className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Начните свой путь к новому жилью уже сегодня
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Присоединяйтесь к тысячам семей, которые уже получили квартиры через АРТЕЛЬ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator">
                <PremiumButton size="xl" variant="secondary" icon={<Calculator />}>
                  Рассчитать накопления
                </PremiumButton>
              </Link>
              <Link to="/register">
                <PremiumButton size="xl" variant="premium" icon={<ArrowRight />}>
                  Стать пайщиком
                </PremiumButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumHomePage;

