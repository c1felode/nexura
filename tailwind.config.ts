import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans], // Для всего UI
        map: ["var(--font-map)", ...defaultTheme.fontFamily.sans],   // Для меток на карте
      },
    },
  },
}