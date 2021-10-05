module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      josefins: ['Josefin Sans']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white:{
        DEFAULT: 'FFFFFF',
      },
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
        footer:'#f4f2f2',
      },
      konsept: {
        DEFAULT:'#1d1d1d',
        gray: '#8b8b8b'
      },
      footer_bg: {
        DEFAULT: '#f4f2f2',

      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
