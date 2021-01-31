module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    backgroundImage: {
      'linear-gradient-gray':
        'linear-gradient(180deg, #0A0A0A -159.65%, rgba(12, 12, 12, 0) 100%)'
    },
    fontSize: {
      lg: ['32px', '40px']
    },
    maxWidth: {
      logo: '3.3rem'
    },
    maxHeight: {
      logo: '3.5rem'
    },
    extend: {
      colors: {
        functional: {
          blue: '#056DFF'
        },
        website: {
          secondary: '#141B4D'
        },
        fontFamily: {
          test: ['Aktiv Grotesk']
        },
        gray: {
          10: '#F0F2F4',
          30: '#B6BEC8',
          40: '#99A4B2',
          50: '#657285',
          60: '#637083',
          70: '#3C4552',
          80: '#373E49',
          90: '#21252C',
          100: '#0B0C0F',
          light: '#DBDBDB'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
