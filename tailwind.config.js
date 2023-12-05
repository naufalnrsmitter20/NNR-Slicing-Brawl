/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        Roboto: "Roboto",
        DMSans: "DMSans",
      },
    },
  },
  plugins: [],
};
