/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontSize: {
        sm: '1.5rem',
        base: '2rem',
        xl: '2.25rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '5rem',
        '5xl': '6rem',
      },
      fontFamily: {
        heading: ['Chiller', 'sans-serif'],
      },
      backgroundImage: {
        ocean: "url('/ocean_bg.png')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
