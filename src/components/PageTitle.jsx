import { useEffect } from 'react';

const PageTitle = ({ title, description }) => {
  useEffect(() => {
    // Обновляем title страницы
    document.title = title ? `${title} | ЖНК АРТЕЛЬ` : 'ЖНК АРТЕЛЬ - Современный жилищно-накопительный кооператив';
    
    // Обновляем meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Жилищно-накопительный кооператив АРТЕЛЬ - ваш путь к собственному жилью без переплат. Выгодные программы накопления, прозрачные условия, надежность.';
  }, [title, description]);

  return null;
};

export default PageTitle;
