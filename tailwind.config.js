/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: "0px",
      tablet: "556px",
      laptop: "1024px",
      desktop: "1440px"
    },
  },
  plugins: [],
}