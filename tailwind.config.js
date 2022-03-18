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
        sans: ['Source Code Pro', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'none' },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'none' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up .4s ease forwards',
        'fade-in-down': 'fade-in-down .4s ease forwards',
      },
    },
  },
  plugins: [],
};
