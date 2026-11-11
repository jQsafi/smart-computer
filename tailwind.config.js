/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Modern Tech Navy & Cobalt Palette (Zero Green)
          navy: '#0B192C',
          navyDark: '#060D17',
          blue: '#1D4ED8',
          blueLight: '#2563EB',
          sky: '#38B6FF',
          dark: '#0f172a',
          muted: '#64748b',
          border: '#e2e8f0',
          bgLight: '#FAFAF9',
          // Brand aliases mapped to new Navy & Blue palette (Zero Green)
          forest: '#0B192C',
          forestDark: '#060D17',
          teal: '#1D4ED8',
          tealLight: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
}
