/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50: '#fefce8',
          100: '#fef9c3',
          400: '#facc15',
          600: '#ca8a04',
          700: '#a16207',
        },
        gold: {
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        cream: {
          50: '#faf9f4',
          100: '#f4f1e8',
          200: '#ede9d8',
        },
        forest: {
          900: '#041510',
          800: '#083522',
          700: '#0f4025',
          600: '#124a2a',
          500: '#155435',
          400: '#1a5c38',
          300: '#246845',
        },
        mint: {
          50: '#f0faf4',
          100: '#dcf5e7',
          200: '#b8ebce',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
