module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { 
    react: { 
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react-refresh', '@typescript-eslint', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  // НОВАЯ СЕКЦИЯ: Переопределение для файлов конфигурации Node.js
  overrides: [
    {
      files: ['tailwind.config.js', 'postcss.config.js', 'vite.config.js'], // Укажите все файлы конфигурации, использующие CommonJS
      env: {
        node: true, // Указываем, что это среда Node.js
        browser: false, // Отключаем среду браузера для этих файлов
      },
      parserOptions: {
        sourceType: 'script', // Указываем, что это CommonJS скрипт
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Отключаем правило, которое ругается на require
        'no-undef': 'off', // Отключаем проверку на неопределенные глобальные переменные (для require)
      },
    },
  ],
};
