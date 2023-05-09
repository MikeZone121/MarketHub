export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        md: '16px',
        lg: '18px',
        xl: '22px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '48px',
        '5xl': '56px',
      },
      colors: {
        primary: "#D60041",
        secondary: "#FDB203",
        red: {
          100: "#D70822",
          200: "#D60041",
          300: "#941000"
        },
        orange: "#FDB203"
      }
    }
  },
  plugins: []
}
