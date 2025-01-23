/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './src/app/**/*.{html,jsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(6%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(6%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeInRight: 'fadeInRight 0.3s ease-in',
        fadeOutRight: 'fadeOutRight 0.33s ease-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
