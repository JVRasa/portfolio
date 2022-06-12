/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
    },
    colors: {
      'purple-r': '#FF30AA',
      'tron-t': '#00EEE2',
      'acid-w': '#3866ce',
      'acid-w-light': '#7393DC',
      'pacman-y': '#EDFF00',
      'white-w': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
