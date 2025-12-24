/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': '#f2efea',
        'light-green': '#CAD2C5',   // lightest
        'soft-green': '#84A98C',
        'muted-teal': '#52796F',
        'dark-teal': '#184e4a',
        'very-dark': '#2F3E46',     // darkest
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'Verdana', 'sans-serif'],
        pp: ['"PP Editorial New"', 'Georgia', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
