module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightText: 'hsl(200, 15%, 8%)',
        darkText: 'hsl(0, 0%, 100%)',
        lightElementColor: 'hsl(0, 0%, 100%)',
        darkElementColor: 'hsl(209, 23%, 22%)',
        lightBackgroundColor: 'hsl(0, 0%, 98%)',
        darkBackgroundColor: 'hsl(207, 26%, 17%)',
        lightInputText: 'hsl(0, 0%, 52%)',
        darkInputText: 'hsl(0, 0%, 100%)',
      },
      spacing: {
        aspectRatio: '56.25%',
      },
      backgroundImage: {
        arrowDown: "url('/assets/arrowDown.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
