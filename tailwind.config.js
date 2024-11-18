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
      laptop: '480px',
      desktop: '1150px',
    },
  },
  plugins: [],
}
