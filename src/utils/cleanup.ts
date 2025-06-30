// Утилита для очистки и реорганизации
export const cleanupOldComponents = () => {
    // Список файлов для удаления
    const filesToRemove = [
    'src/contexts/TierContext.tsx',
    'src/components/TierSelector.tsx',
    'src/pages/NewHomePage.tsx' // Заменим на PremiumHomePage
    ];
    console.log('Файлы для удаления:', filesToRemove);
    };