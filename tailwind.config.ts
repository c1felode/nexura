import defaultTheme from 'tailwindcss/defaultTheme'

// Change this: export default {
// To this:
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        map: ["var(--font-map)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
