module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          geoz: '#2B8135',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
