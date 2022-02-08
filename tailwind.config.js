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
    },
  },
  plugins: [],
};
