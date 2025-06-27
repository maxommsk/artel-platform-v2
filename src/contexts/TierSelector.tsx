import React from 'react';
import { useTier } from '../contexts/TierContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Crown, Users } from 'lucide-react';

interface TierSelectorProps {
  onTierSelect?: (tier: 'core' | 'elite') => void;
}

const TierSelector: React.FC<TierSelectorProps> = ({ onTierSelect }) => {
  const { selectedTier, setSelectedTier, getTierConfig } = useTier();

  const handleTierSelect = (tier: 'core' | 'elite') => {
    setSelectedTier(tier);
    if (onTierSelect) {
      onTierSelect(tier);
    }
  };

  const coreConfig = getTierConfig('core');
  const eliteConfig = getTierConfig('elite');

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Выберите ваш уровень</h2>
        <p className="text-lg text-gray-600">
          Мы создали два уровня для разных потребностей и возможностей
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* CORE Сегмент */}
        <Card 
          className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
            selectedTier === 'core' 
              ? 'ring-2 ring-blue-500 shadow-lg' 
              : 'hover:shadow-md'
          }`}
          onClick={() => handleTierSelect('core')}
        >
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${coreConfig.color}`}>
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">{coreConfig.name}</CardTitle>
            <CardDescription className="text-lg">
              {coreConfig.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                от 10,000₽
              </div>
              <div className="text-gray-600">в месяц</div>
            </div>

            <div className="space-y-3">
              {coreConfig.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                className={`w-full ${
                  selectedTier === 'core' 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-600 hover:bg-gray-700'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTierSelect('core');
                }}
              >
                {selectedTier === 'core' ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Выбрано
                  </>
                ) : (
                  'Выбрать СТАРТ'
                )}
              </Button>
            </div>

            {selectedTier === 'core' && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-600">
                  <Check className="h-3 w-3 mr-1" />
                  Выбрано
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ELITE Сегмент */}
        <Card 
          className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
            selectedTier === 'elite' 
              ? 'ring-2 ring-amber-500 shadow-lg' 
              : 'hover:shadow-md'
          }`}
          onClick={() => handleTierSelect('elite')}
        >
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${eliteConfig.color}`}>
                <Crown className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <CardTitle className="text-2xl font-bold">{eliteConfig.name}</CardTitle>
              <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
                <Star className="h-3 w-3 mr-1" />
                ПРЕМИУМ
              </Badge>
            </div>
            <CardDescription className="text-lg">
              {eliteConfig.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                от 100,000₽
              </div>
              <div className="text-gray-600">в месяц</div>
            </div>

            <div className="space-y-3">
              {eliteConfig.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                className={`w-full ${
                  selectedTier === 'elite' 
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700' 
                    : 'bg-gray-600 hover:bg-gray-700'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTierSelect('elite');
                }}
              >
                {selectedTier === 'elite' ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Выбрано
                  </>
                ) : (
                  <>
                    <Crown className="h-4 w-4 mr-2" />
                    Выбрать ЭЛИТ
                  </>
                )}
              </Button>
            </div>

            {selectedTier === 'elite' && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600">
                  <Check className="h-3 w-3 mr-1" />
                  Выбрано
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Сравнительная таблица */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">Сравнение уровней</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-4 text-left">Возможности</th>
                <th className="border border-gray-200 p-4 text-center">АРТЕЛЬ СТАРТ</th>
                <th className="border border-gray-200 p-4 text-center">АРТЕЛЬ ЭЛИТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-4 font-medium">Минимальный взнос</td>
                <td className="border border-gray-200 p-4 text-center">от 10,000₽</td>
                <td className="border border-gray-200 p-4 text-center">от 100,000₽</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium">Персональный консультант</td>
                <td className="border border-gray-200 p-4 text-center">
                  <span className="text-gray-400">—</span>
                </td>
                <td className="border border-gray-200 p-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 font-medium">Консьерж-сервис</td>
                <td className="border border-gray-200 p-4 text-center">
                  <span className="text-gray-400">—</span>
                </td>
                <td className="border border-gray-200 p-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium">Эксклюзивные объекты</td>
                <td className="border border-gray-200 p-4 text-center">
                  <span className="text-gray-400">—</span>
                </td>
                <td className="border border-gray-200 p-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 font-medium">КВМ-токены</td>
                <td className="border border-gray-200 p-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="border border-gray-200 p-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Check className="h-5 w-5 text-green-500" />
                    <Star className="h-4 w-4 text-amber-500" />
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium">Международные инвестиции</td>
                <td className="border border-gray-200 p-4 text-center">
                  <span className="text-gray-400">—</span>
                </td>
                <td className="border border-gray-200 p-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TierSelector;
