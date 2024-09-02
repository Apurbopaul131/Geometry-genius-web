/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/project/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
