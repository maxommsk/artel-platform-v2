import { 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  Car,
  Wifi,
  Shield,
  TreePine,
  School,
  ShoppingCart,
  Hospital,
  Train,
  Filter,
  Search,
  Heart,
  Eye,
  Star,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';
import PageTitle from '../components/PageTitle';

const PropertiesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const properties = [
    {
      id: 1,
      title: 'ЖК "Северная звезда"',
      location: 'Москва, Северное Бутово',
      price: '4 500 000 ₽',
      rooms: '2-комнатная',
      area: '65 м²',
      floor: '12/17',
      status: 'available',
      image: '/api/placeholder/400/300',
      features: ['parking', 'security', 'playground'],
      description: 'Современный жилой комплекс с развитой инфраструктурой',
      developer: 'ГК "Эталон"',
      completion: '2025 Q2'
    },
    {
      id: 2,
      title: 'ЖК "Солнечный город"',
      location: 'СПб, Приморский район',
      price: '3 800 000 ₽',
      rooms: '1-комнатная',
      area: '42 м²',
      floor: '8/14',
      status: 'available',
      image: '/api/placeholder/400/300',
      features: ['fitness', 'concierge'],
      description: 'Комфортное жилье в экологически чистом районе',
      developer: 'ЛСР Недвижимость',
      completion: '2024 Q4'
    },
    {
      id: 3,
      title: 'ЖК "Академический"',
      location: 'Екатеринбург, Академический',
      price: '2 900 000 ₽',
      rooms: '3-комнатная',
      area: '78 м²',
      floor: '5/9',
      status: 'soon',
      image: '/api/placeholder/400/300',
      features: ['parking', 'playground', 'security'],
      description: 'Семейный комплекс рядом с парком и школами',
      developer: 'Атомстройкомплекс',
      completion: '2025 Q3'
    },
    {
      id: 4,
      title: 'ЖК "Московские ворота"',
      location: 'Москва, Южное Бутово',
      price: '5 200 000 ₽',
      rooms: '2-комнатная',
      area: '72 м²',
      floor: '15/25',
      status: 'available',
      image: '/api/placeholder/400/300',
      features: ['pool', 'fitness', 'concierge'],
      description: 'Премиальный комплекс с панорамными видами',
      developer: 'ПИК',
      completion: '2024 Q3'
    },
    {
      id: 5,
      title: 'ЖК "Невский берег"',
      location: 'СПб, Невский район',
      price: '4 100 000 ₽',
      rooms: '2-комнатная',
      area: '58 м²',
      floor: '7/12',
      status: 'reserved',
      image: '/api/placeholder/400/300',
      features: ['parking', 'security'],
      description: 'Жилой комплекс на берегу Невы',
      developer: 'Setl Group',
      completion: '2025 Q1'
    },
    {
      id: 6,
      title: 'ЖК "Уральские самоцветы"',
      location: 'Екатеринбург, Верх-Исетский',
      price: '3 400 000 ₽',
      rooms: '1-комнатная',
      area: '38 м²',
      floor: '10/16',
      status: 'available',
      image: '/api/placeholder/400/300',
      features: ['fitness', 'playground'],
      description: 'Современное жилье в центре города',
      developer: 'Брусника',
      completion: '2024 Q4'
    }
  ];

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Доступно';
      case 'soon': return 'Скоро в продаже';
      case 'reserved': return 'Зарезервировано';
      default: return 'Неизвестно';
    }
  };

  const getFeatureIcon = (feature) => {
    switch (feature) {
      case 'parking': return Car;
      case 'security': return Shield;
      case 'playground': return Users;
      case 'fitness': return Users;
      case 'pool': return Users;
      case 'concierge': return Users;
      default: return CheckCircle;
    }
  };

  const getFeatureText = (feature) => {
    switch (feature) {
      case 'parking': return 'Паркинг';
      case 'security': return 'Охрана';
      case 'playground': return 'Детская площадка';
      case 'fitness': return 'Фитнес-зал';
      case 'pool': return 'Бассейн';
      case 'concierge': return 'Консьерж';
      default: return feature;
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesFilter = selectedFilter === 'all' || property.status === selectedFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageTitle 
        title="Объекты недвижимости" 
        description="Каталог проверенных объектов недвижимости от надежных застройщиков. Квартиры в Москве, СПб, Екатеринбурге. Специальные условия для пайщиков ЖНК АРТЕЛЬ."
      />
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Объекты <span className="text-yellow-400">недвижимости</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Выберите квартиру мечты из нашего каталога проверенных объектов от надежных застройщиков
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">156</span>
                <p className="text-sm">Доступных объектов</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">3</span>
                <p className="text-sm">Города</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">25+</span>
                <p className="text-sm">Застройщиков</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по названию или району..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Фильтры */}
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex gap-2">
                {[
                  { key: 'all', label: 'Все' },
                  { key: 'available', label: 'Доступно' },
                  { key: 'soon', label: 'Скоро' },
                  { key: 'reserved', label: 'Зарезервировано' }
                ].map(filter => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedFilter === filter.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог объектов */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Изображение */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="h-16 w-16 text-white/50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.status === 'available' ? 'bg-green-100 text-green-800' :
                      property.status === 'soon' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {getStatusText(property.status)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favorites.includes(property.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes(property.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {property.description}
                  </p>

                  {/* Характеристики */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Комнат:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{property.rooms}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Площадь:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{property.area}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Этаж:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{property.floor}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Сдача:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{property.completion}</p>
                    </div>
                  </div>

                  {/* Удобства */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => {
                      const Icon = getFeatureIcon(feature);
                      return (
                        <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1">
                          <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-1" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {getFeatureText(feature)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Цена и кнопки */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {property.price}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {property.developer}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <Eye className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Объекты не найдены
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Попробуйте изменить параметры поиска или фильтры
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Преимущества работы с АРТЕЛЬ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Почему стоит выбрать наши объекты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Проверенные застройщики',
                description: 'Работаем только с надежными девелоперами с безупречной репутацией'
              },
              {
                icon: Star,
                title: 'Лучшие цены',
                description: 'Специальные условия для пайщиков кооператива, скидки до 15%'
              },
              {
                icon: CheckCircle,
                title: 'Юридическая чистота',
                description: 'Полная проверка документов и гарантия безопасности сделки'
              },
              {
                icon: Users,
                title: 'Персональное сопровождение',
                description: 'Индивидуальный подход и поддержка на всех этапах покупки'
              }
            ].map((advantage, index) => (
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
    </div>
  );
};

export default PropertiesPage;
