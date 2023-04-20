/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        primary: "#D60041",
        secondary: "#FDB203",
        red: {
          100: "#D70822",
          200: "#D60041",
          300: "#941000",
        },
        orange: "#FDB203",
      },
    },
  },
  plugins: [],
};
