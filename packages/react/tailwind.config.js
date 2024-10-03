import { colors } from '@ui-developer-system/tokens'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
      },
      marginBottom: {
        64: '64px',
      },
    },
  },

  plugins: [],
}
