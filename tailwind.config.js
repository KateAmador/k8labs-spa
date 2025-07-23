/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'k-dark-blue': '#0a192f',
        'k-deep-purple': '#020c1b',
        'k-light-blue': '#1a2a47',
        'k-cyan': '#64ffda',
        'k-magenta': '#ff64da',
        'k-text-light': '#ccd6f6',
        'k-text-dark': '#8892b0',
        'k-border': '#2a3a59',
      }
    },
  },
  plugins: [],
} 