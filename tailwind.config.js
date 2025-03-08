/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#f8f6ff',
          100: '#f0ebff',
          200: '#e5dcff',
          300: '#d3c4ff',
          400: '#b79dff',
          500: '#9a6fff',
          600: '#8347ff',
          700: '#7132ed',
          800: '#5f28cc',
          900: '#4e20a5',
        },
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};