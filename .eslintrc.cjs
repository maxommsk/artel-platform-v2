module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Добавляем правила для TypeScript
    'plugin:jsx-a11y/recommended', // Добавляем правила доступности
    'plugin:import/errors', // Проверка ошибок импорта
    'plugin:import/warnings', // Проверка предупреждений импорта
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // Используем TypeScript парсер
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Включаем поддержку JSX
    },
  },
  settings: { 
    react: { 
      version: 'detect' // Автоматически определяет версию React
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react-refresh', '@typescript-eslint', 'import'], // Добавляем плагины
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Отключаем проверку prop-types, так как обычно используется TypeScript или она не нужна
    'no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
    'jsx-a11y/anchor-is-valid': 'off', // Отключаем, если используете Link из react-router-dom и не хотите, чтобы ESLint ругался на отсутствие href
    '@typescript-eslint/no-unused-vars': 'warn', // Правило для TypeScript о неиспользуемых переменных
    '@typescript-eslint/no-explicit-any': 'off', // Отключаем, если не хотите ругаться на 'any'
  },
};
