/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'violet-7C': '#7C5DFA',
        'violet-92': '#9277FF',
        'dark-1E': '#1E2139',
        'dark-25': '#252945',
        'dark-14': '#141625',
        'dark-37': '#373B53',
        'dark-49': '#494E6E',
        'dark-0C': '#0C0E16',
        'gray-DF': '#DFE3FA',
        'gray-88': '#888EB0',
        'gray-85': '#858BB2',
        'pale-7E': '#7E88C3',
        'pink-EC': '#EC5757',
        'pink-FF': '#FF9797',
        'light-F8': '#F8F8FB',
        'light-F9': '#F9FAFE',
      },
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
