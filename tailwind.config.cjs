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
      colors: {
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
