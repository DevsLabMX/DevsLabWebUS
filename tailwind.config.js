module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      screens: {
        'xsm':{'min': '144px', 'max': '639px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
