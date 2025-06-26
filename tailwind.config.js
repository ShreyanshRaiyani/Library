/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#304d78',
          dark: '#102341',
        },
        secondary: {
          DEFAULT: '#f0c75e',
          light: '#f5d883',
          dark: '#e6b32e',
        },
        accent: {
          DEFAULT: '#e63946',
          light: '#ea5d68',
          dark: '#c42836',
        },
        success: {
          DEFAULT: '#2e7d32',
          light: '#4caf50',
          dark: '#1b5e20',
        },
        warning: {
          DEFAULT: '#ed6c02',
          light: '#ff9800',
          dark: '#e65100',
        },
        error: {
          DEFAULT: '#d32f2f',
          light: '#ef5350',
          dark: '#c62828',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};