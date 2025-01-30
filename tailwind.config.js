import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{pug,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['TT Firs Neue'],
    },
    colors: {
      transparent: 'transparent',
      blue: '#0070B8',
      black: '#0B1226',
      grey: {
        100: '#E4E4E4',
        200: '#747884',
      },
      white: {
        100: 'rgba(255, 255, 255, 0.10)',
        200: '#FFF',
      }
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.33, 1, 0.68, 1)'
      },
      transitionDuration: {
        DEFAULT: '0.5s'
      },
      spacing: {
        '15px': '15px',
        '18px': '18px',
        '22px': '22px',
        '60px': '60px',
        '68px': '68px',
        '890px': '890px',
      }
    },
    screens: {
      desktop: { min: '1201px' },
      tablet: { max: '1200px', min: '768px' },
      mobile: { max: '767px', min: '375px' },
    }
  },
  plugins: [
    plugin(function ({ theme, addUtilities }) {
      const screens = theme('screens')

      const newUtilities = {
        '.desktop': {
          [`@media (max-width: ${screens.tablet.max})`]: {
            display: 'none !important'
          }
        },
        '.tablet': {
          [`@media (min-width: ${screens.desktop.min})`]: {
            display: 'none !important'
          },
          [`@media (max-width: ${screens.mobile.max})`]: {
            display: 'none !important'
          }
        },
        '.mobile': {
          [`@media (min-width: ${screens.tablet.min})`]: {
            display: 'none !important'
          }
        },
      }

      addUtilities(newUtilities, ['responsive'])
    })
  ]
}
