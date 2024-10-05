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
                meteor: 'meteor 5s linear infinite',
            },
            keyframes: {
                meteor: {
                    '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
                    '70%': { opacity: 1 },
                    '100%': {
                        transform: 'rotate(215deg) translateX(-500px)',
                        opacity: 0,
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
        require('tailwindcss-animate'),
    ],
};
