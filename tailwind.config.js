/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#f2efea",
        "light-green": "#CAD2C5", // lightest
        "soft-green": "#84A98C",
        "muted-teal": "#52796F",
        "dark-teal": "#184e4a",
        "very-dark": "#2F3E46", // darkest
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', "Verdana", "sans-serif"],
        pp: ['"PP Editorial New"', "Georgia", "sans-serif"],
      },
      animation: {
        slideIn: "slideIn 0.8s ease-out",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        floatIn: "floatIn 0.6s ease-out forwards",
        wave: "wave 1.5s infinite",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatIn: {
          "0%": { opacity: 0, transform: "translateY(10px) scale(0.95)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "75%": { transform: "rotate(-10deg)" },
        },
      },
    },
  },
  plugins: [],
};
