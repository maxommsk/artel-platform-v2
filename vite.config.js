import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react( )],
  resolve: {
    alias: {
      '@': '/src', // Добавляем алиас для @
    },
  },
  // Конфигурация Vitest
  test: {
    globals: true, // Делает expect, test, describe глобальными
    environment: 'jsdom', // Использует JSDOM для эмуляции DOM-окружения браузера
    setupFiles: './tests/setup.js', // Файл для настройки тестовой среды
  },
});
