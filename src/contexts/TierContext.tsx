import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Типы для тарифов
export interface Tariff {
  id: string;
  name: string;
  description: string;
  initialPayment: number;
  duration: number;
  coefficient: number;
  minMonthlyPayment: number;
  features: string[];
  popular: boolean;
  tier: 'core' | 'elite';
}

// Конфигурация уровня
export interface TierConfig {
  name: string;
  description: string;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  features: string[];
}

// Контекст типы
interface TierContextType {
  selectedTier: 'core' | 'elite';
  setSelectedTier: (tier: 'core' | 'elite') => void;
  userTier: 'core' | 'elite' | null;
  setUserTier: (tier: 'core' | 'elite' | null) => void;
  coreTariffs: Tariff[];
  eliteTariffs: Tariff[];
  getTariffsByTier: (tier: 'core' | 'elite') => Tariff[];
  getAllTariffs: () => Tariff[];
  getTariffById: (id: string) => Tariff | undefined;
  isEliteUser: () => boolean;
  getTierConfig: (tier: 'core' | 'elite') => TierConfig;
}

const TierContext = createContext<TierContextType | undefined>(undefined);

export const useTier = (): TierContextType => {
  const context = useContext(TierContext);
  if (!context) {
    throw new Error('useTier must be used within a TierProvider');
  }
  return context;
};

interface TierProviderProps {
  children: ReactNode;
}

export const TierProvider: React.FC<TierProviderProps> = ({ children }) => {
  const [selectedTier, setSelectedTier] = useState<'core' | 'elite'>('core');
  const [userTier, setUserTier] = useState<'core' | 'elite' | null>(null);

  // Конфигурация тарифов для CORE сегмента
  const coreTariffs: Tariff[] = [
    {
      id: 'core-start',
      name: 'АРТЕЛЬ СТАРТ',
      description: 'Базовый тариф для начинающих пайщиков',
      initialPayment: 30,
      duration: 120,
      coefficient: 0.7,
      minMonthlyPayment: 10000,
      features: [
        'Фиксированная ставка',
        'Гибкий график платежей',
        'Онлайн-кабинет',
        'Базовая поддержка',
        'КВМ-токены (базовый курс)'
      ],
      popular: false,
      tier: 'core'
    },
    {
      id: 'core-optimal',
      name: 'АРТЕЛЬ ОПТИМАЛ',
      description: 'Оптимальный выбор для большинства пайщиков',
      initialPayment: 50,
      duration: 60,
      coefficient: 0.5,
      minMonthlyPayment: 25000,
      features: [
        'Приоритет в очереди',
        'Сниженные взносы',
        'Персональный менеджер',
        'Расширенная аналитика',
        'КВМ-токены (повышенный курс)'
      ],
      popular: true,
      tier: 'core'
    },
    {
      id: 'core-turbo',
      name: 'АРТЕЛЬ ТУРБО',
      description: 'Быстрое накопление для активных пайщиков',
      initialPayment: 70,
      duration: 36,
      coefficient: 0.3,
      minMonthlyPayment: 50000,
      features: [
        'Максимальная доходность',
        'Торговля паями',
        'Аналитика рынка',
        'Приоритетная поддержка',
        'КВМ-токены (максимальный курс)'
      ],
      popular: false,
      tier: 'core'
    }
  ];

  // Конфигурация тарифов для ELITE сегмента
  const eliteTariffs: Tariff[] = [
    {
      id: 'elite-premium',
      name: 'АРТЕЛЬ ПРЕМИУМ',
      description: 'Премиальные условия для среднего класса',
      initialPayment: 40,
      duration: 84,
      coefficient: 0.4,
      minMonthlyPayment: 100000,
      features: [
        'Персональный консультант',
        'Эксклюзивные объекты',
        'Консьерж-сервис',
        'VIP-поддержка 24/7',
        'КВМ-токены (премиум курс)',
        'Доступ к клубу ELITE',
        'Международные инвестиции'
      ],
      popular: false,
      tier: 'elite'
    },
    {
      id: 'elite-luxury',
      name: 'АРТЕЛЬ ЛЮКС',
      description: 'Роскошные условия для состоятельных клиентов',
      initialPayment: 60,
      duration: 48,
      coefficient: 0.25,
      minMonthlyPayment: 250000,
      features: [
        'Личный консьерж',
        'Элитная недвижимость',
        'Индивидуальные условия',
        'Приватные мероприятия',
        'КВМ-токены (люкс курс)',
        'Эксклюзивный клуб',
        'Глобальные возможности',
        'Семейное планирование'
      ],
      popular: true,
      tier: 'elite'
    },
    {
      id: 'elite-platinum',
      name: 'АРТЕЛЬ ПЛАТИНУМ',
      description: 'Максимальные привилегии для VIP-клиентов',
      initialPayment: 80,
      duration: 24,
      coefficient: 0.15,
      minMonthlyPayment: 500000,
      features: [
        'Персональная команда',
        'Уникальные проекты',
        'Безлимитные возможности',
        'Частные события',
        'КВМ-токены (платинум курс)',
        'Закрытый клуб',
        'Международная экспансия',
        'Наследственное планирование',
        'Благотворительные проекты'
      ],
      popular: false,
      tier: 'elite'
    }
  ];

  // Получение тарифов по уровню
  const getTariffsByTier = (tier: 'core' | 'elite'): Tariff[] => {
    return tier === 'elite' ? eliteTariffs : coreTariffs;
  };

  // Получение всех тарифов
  const getAllTariffs = (): Tariff[] => {
    return [...coreTariffs, ...eliteTariffs];
  };

  // Получение тарифа по ID
  const getTariffById = (id: string): Tariff | undefined => {
    return getAllTariffs().find(tariff => tariff.id === id);
  };

  // Проверка, является ли пользователь ELITE
  const isEliteUser = (): boolean => {
    return userTier === 'elite';
  };

  // Получение конфигурации уровня
  const getTierConfig = (tier: 'core' | 'elite'): TierConfig => {
    if (tier === 'elite') {
      return {
        name: 'АРТЕЛЬ ЭЛИТ',
        description: 'Премиальные условия для среднего класса',
        color: 'from-amber-500 to-yellow-600',
        textColor: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        features: [
          'Персональные консультанты',
          'Эксклюзивная недвижимость',
          'Консьерж-сервис',
          'VIP-мероприятия',
          'Международные возможности'
        ]
      };
    }
    
    return {
      name: 'АРТЕЛЬ СТАРТ',
      description: 'Доступные условия для всех',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        'Базовые условия накопления',
        'Стандартная поддержка',
        'Онлайн-кабинет',
        'КВМ-токены',
        'Сообщество пайщиков'
      ]
    };
  };

  // Сохранение выбранного уровня в localStorage
  useEffect(() => {
    const savedTier = localStorage.getItem('selectedTier') as 'core' | 'elite' | null;
    if (savedTier && (savedTier === 'core' || savedTier === 'elite')) {
      setSelectedTier(savedTier);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedTier', selectedTier);
  }, [selectedTier]);

  const value: TierContextType = {
    selectedTier,
    setSelectedTier,
    userTier,
    setUserTier,
    coreTariffs,
    eliteTariffs,
    getTariffsByTier,
    getAllTariffs,
    getTariffById,
    isEliteUser,
    getTierConfig
  };

  return (
    <TierContext.Provider value={value}>
      {children}
    </TierContext.Provider>
  );
};
