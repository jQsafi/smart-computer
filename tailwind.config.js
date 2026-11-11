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
          forest: '#0A3622',
          forestDark: '#05180f',
          teal: '#138A72',
          tealLight: '#19A98C',
          sky: '#38B6FF',
          dark: '#0f172a',
          muted: '#64748b',
          border: '#e2e8f0',
          bgLight: '#FAFAF9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', 'system-ui', 'sans-serif'],
        bn: ['"Hind Siliguri"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
