const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#111111',
      },
      fontFamily: {
        sans: ['Source Code Pro'],
      },
      fontSize: {
        xl: ['1.25rem', { lineHeight: 1.1 }],
        '2xl': ['1.5rem', { lineHeight: 1.1 }],
        '3xl': ['1.875rem', { lineHeight: 1.1 }],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        p: { maxWidth: '60ch' },
      });
    }),
  ],
};
