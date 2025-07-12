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
        'fondo-oscuro': '#022623',
        'primario': '#2e64fb',
        'secundario': '#fd6901',
        'texto-claro': '#ffffff',
        'gris-suave': '#f5f5f5',
        'texto-secundario': '#7c8b9c',
      }
    },
  },
  plugins: [],
} 