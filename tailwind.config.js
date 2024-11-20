/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        job: ['"Playwrite CU"', 'cursive'],
      },
    },
    screens: {
      mobile: {max: '768px'},
      laptop: '769px',
      desktop: '1150px',
    },
  },
  plugins: [],
}
