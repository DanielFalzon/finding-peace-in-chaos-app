module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        'purple': '#764192'
      },
      fontFamily: {
        'montserrat': 'montserrat',
        'maven': '"Maven Pro"',
        'catamaran': 'Catamaran'
      },
      fontSize: {
        'tiny': '.625rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
