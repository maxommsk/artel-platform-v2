/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
  colors: {
  primary: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  900: '#0c4a6e'
  },
  premium: {
  gold: '#d4af37',
  platinum: '#e5e4e2',
  diamond: '#b9f2ff'
  }
  },
  fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Playfair Display', 'serif']
  },
  animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'scale-in': 'scaleIn 0.3s ease-out'
  },
  keyframes: {
  fadeIn: {
  '0%': { opacity: '0' },
  '100%': { opacity: '1' }
  },
  slideUp: {
  '0%': { transform: 'translateY(20px)', opacity: '0' },
  '100%': { transform: 'translateY(0)', opacity: '1' }
  },
  scaleIn: {
  '0%': { transform: 'scale(0.95)', opacity: '0' },
  '100%': { transform: 'scale(1)', opacity: '1' }
  }
  }
  },
  },
  plugins: [],
  }