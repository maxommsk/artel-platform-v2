import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Calculator, Home, TrendingUp, DollarSign, Clock, Percent } from 'lucide-react';
import PageTitle from '../components/PageTitle';

const CalculatorPage = () => {
  const [apartmentCost, setApartmentCost] = useState(5000000);
  const [initialPayment, setInitialPayment] = useState(30);
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const plans = {
    standard: {
      name: 'Стандарт',
      monthlyRate: 0.5,
      description: 'Базовый тариф с умеренной доходностью',
      color: '#3b82f6'
    },
    accelerated: {
      name: 'Ускоренный',
      monthlyRate: 0.8,
      description: 'Повышенная доходность для быстрого накопления',
      color: '#10b981'
    },
    investment: {
      name: 'Инвестиционный',
      monthlyRate: 1.2,
      description: 'Максимальная доходность с инвестиционным доходом',
      color: '#f59e0b'
    }
  };

  const calculations = useMemo(() => {
    const initialAmount = (apartmentCost * initialPayment) / 100;
    const remainingAmount = apartmentCost - initialAmount;
    const monthlyRate = plans[selectedPlan].monthlyRate / 100;
    
    // Расчет накоплений по месяцам
    const monthlyData = [];
    let currentAmount = initialAmount;
    let monthlyPayment = 0;
    let totalMonths = 0;

    // Находим необходимый ежемесячный платеж
    for (let payment = 10000; payment <= 200000; payment += 1000) {
      let testAmount = initialAmount;
      let months = 0;
      
      while (testAmount < apartmentCost && months < 300) {
        testAmount += payment;
        testAmount *= (1 + monthlyRate);
        months++;
      }
      
      if (testAmount >= apartmentCost) {
        monthlyPayment = payment;
        totalMonths = months;
        break;
      }
    }

    // Генерируем данные для графика
    currentAmount = initialAmount;
    for (let month = 0; month <= totalMonths; month++) {
      monthlyData.push({
        month,
        amount: Math.round(currentAmount),
        target: apartmentCost,
        progress: Math.round((currentAmount / apartmentCost) * 100)
      });
      
      if (month < totalMonths) {
        currentAmount += monthlyPayment;
        currentAmount *= (1 + monthlyRate);
      }
    }

    // Сравнение с ипотекой
    const mortgageRate = 0.16 / 12; // 16% годовых
    const mortgageMonths = 20 * 12; // 20 лет
    const mortgageAmount = apartmentCost - initialAmount;
    const mortgagePayment = (mortgageAmount * mortgageRate * Math.pow(1 + mortgageRate, mortgageMonths)) / 
                           (Math.pow(1 + mortgageRate, mortgageMonths) - 1);
    const totalMortgagePayment = mortgagePayment * mortgageMonths + initialAmount;
    const mortgageOverpayment = totalMortgagePayment - apartmentCost;

    return {
      initialAmount,
      remainingAmount,
      monthlyPayment,
      totalMonths,
      monthlyData,
      totalSavings: monthlyPayment * totalMonths + initialAmount,
      mortgagePayment: Math.round(mortgagePayment),
      totalMortgagePayment: Math.round(totalMortgagePayment),
      mortgageOverpayment: Math.round(mortgageOverpayment),
      savings: Math.round(mortgageOverpayment)
    };
  }, [apartmentCost, initialPayment, selectedPlan, plans]); // <-- ДОБАВЛЕНО: plans

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Калькулятор накоплений ЖНК АРТЕЛЬ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Рассчитайте свою программу накоплений и сравните с ипотекой
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Настройки */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                Параметры расчета
              </h2>

              {/* Стоимость квартиры */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Стоимость квартиры: {apartmentCost.toLocaleString()} ₽
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="10000000"
                  step="100000"
                  value={apartmentCost}
                  onChange={(e) => setApartmentCost(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 млн ₽</span>
                  <span>10 млн ₽</span>
                </div>
              </div>

              {/* Первоначальный взнос */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Первоначальный взнос: {initialPayment}% ({((apartmentCost * initialPayment) / 100).toLocaleString()} ₽)
                </label>
                <input
                  type="range"
                  min="20"
                  max="70"
                  step="5"
                  value={initialPayment}
                  onChange={(e) => setInitialPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20%</span>
                  <span>70%</span>
                </div>
              </div>

              {/* Тарифные планы */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Тарифный план
                </label>
                <div className="space-y-3">
                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedPlan === key
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPlan(key)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {plan.name}
                        </span>
                        <span className="text-sm font-bold" style={{ color: plan.color }}>
                          {plan.monthlyRate}% в месяц
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {plan.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Результаты */}
          <div className="lg:col-span-2 space-y-6">
            {/* Основные показатели */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {calculations.totalMonths}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  месяцев до покупки
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {calculations.monthlyPayment.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ₽ в месяц
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {calculations.savings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ₽ экономия vs ипотека
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <Percent className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plans[selectedPlan].monthlyRate}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  доходность в месяц
                </div>
              </div>
            </div>

            {/* График накопления */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                График накопления средств
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={calculations.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="month" 
                      label={{ value: 'Месяц', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `${(value / 1000000).toFixed(1)}М`}
                      label={{ value: 'Сумма, ₽', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value, name) => [
                        `${value.toLocaleString()} ₽`, 
                        name === 'amount' ? 'Накоплено' : 'Цель'
                      ]}
                      labelFormatter={(month) => `Месяц: ${month}`}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke={plans[selectedPlan].color}
                      strokeWidth={3}
                      name="Накоплено"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      stroke="#ef4444" 
                      strokeDasharray="5 5"
                      name="Цель"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Сравнение с ипотекой */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Сравнение с ипотекой 16%
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">ЖНК АРТЕЛЬ</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Ежемесячный платеж:</span>
                      <span className="font-medium">{calculations.monthlyPayment.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Срок накопления:</span>
                      <span className="font-medium">{calculations.totalMonths} мес.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Общая сумма:</span>
                      <span className="font-medium">{apartmentCost.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Переплата:</span>
                      <span className="font-bold">0 ₽</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Ипотека 16%</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Ежемесячный платеж:</span>
                      <span className="font-medium">{calculations.mortgagePayment.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Срок кредита:</span>
                      <span className="font-medium">240 мес.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Общая сумма:</span>
                      <span className="font-medium">{calculations.totalMortgagePayment.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>Переплата:</span>
                      <span className="font-bold">{calculations.mortgageOverpayment.toLocaleString()} ₽</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    Экономия: {calculations.savings.toLocaleString()} ₽
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-400">
                    Выбирая ЖНК АРТЕЛЬ, вы экономите более {Math.round(calculations.savings / 1000000)} миллионов рублей!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
