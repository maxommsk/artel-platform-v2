import React from 'react'; // Явный импорт React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');

// Проверяем, что элемент существует, прежде чем создавать root
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Root element with ID "root" not found in the document.');
}
