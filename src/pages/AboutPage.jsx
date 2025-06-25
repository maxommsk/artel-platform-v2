import PageTitle from '../components/PageTitle';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <PageTitle 
        title="О кооперативе" 
        description="Информация о ЖНК АРТЕЛЬ - история, миссия, команда и достижения кооператива."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            О кооперативе АРТЕЛЬ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Мы помогаем людям приобретать жилье без кабальных условий ипотеки
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Наша миссия
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Предоставить каждой семье возможность приобрести собственное жилье 
            на справедливых и выгодных условиях через систему накопительных программ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
