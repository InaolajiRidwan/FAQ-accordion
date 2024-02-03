/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        worksan: ["work Sans"],
      },
      colors: {
        Lightpink: "hsl(275, 100%, 97%)",
        Grayishpurple: "hsl(292, 16%, 49%)",
        Darkpurple: "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
