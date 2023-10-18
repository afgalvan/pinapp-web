/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}',
  ],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      boxShadow: {
        '2xl': 'box-shadow: none !important;',
      },
      animation: {
        spinShimmer: 'spinShimmer calc(var(--speed) * 2) infinite linear',
        spinSpot: 'spinSpot 3s infinite linear',
        meteor: 'meteor 5s linear infinite',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
      },
      keyframes: {
        spinShimmer: {
          '0%': {
            rotate: '0deg',
          },
          '15%, 35%': {
            rotate: '90deg',
          },
          '65%, 85%': {
            rotate: '270deg',
          },
          '100%': {
            rotate: '360deg',
          },
        },
        spinSpot: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
      },
      colors: {
        'dark-card': 'hsl(233 100% 4%)',
        'light-card': 'hsl(0 0% 100%)',
        'dark-bd': 'hsl(240 3.7% 15.9%)',
        'light-bd': 'hsl(240 5.9% 90%)',
        primary: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          200: '#BCF0DA',
          300: '#84E1BC',
          400: '#31C48D',
          500: '#0E9F6E',
          600: '#057A55',
          700: '#046C4E',
          800: '#03543F',
          900: '#014737',
        },
      },
    },
  },
};

module.exports = config;
