import React from 'react';

// Определяем интерфейс для пропсов компонента PageTitle
interface PageTitleProps {
  title: string;
  description: string;
}

// Используем интерфейс PageTitleProps для типизации пропсов
const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <div className="text-center py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default PageTitle;
