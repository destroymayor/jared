const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#111111',
      },
      fontFamily: {
        sans: ['Source Code Pro', ...fontFamily.sans],
      },
      fontSize: {
        xl: ['1.25rem', { lineHeight: 1.1 }],
        '2xl': ['1.5rem', { lineHeight: 1.1 }],
        '3xl': ['1.875rem', { lineHeight: 1.1 }],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out 0.5s',
        revealing: 'revealing 1s ease-in-out 0.5s',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, filter: 'brightness(1) blur(20px)' },
          '10%': { opacity: 1, filter: 'brightness(2) blur(10px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0px)' },
        },
        revealing: {
          '0%': {
            opacity: 0.2,
            mask: 'linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 150% 0/400% no-repeat',
          },
          '100%': {
            opacity: 1,
            mask: 'linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 0/400% no-repeat',
          },
        },
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
