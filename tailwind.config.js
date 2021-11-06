//https://stackoverflow.com/questions/56755439/modifying-hover-in-tailwindcss
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        'purple': '#6B3F9C',
        'peach': '#FFF4EE'
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
