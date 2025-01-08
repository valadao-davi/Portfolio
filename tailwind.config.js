/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      scale: {
        '200': '2.0',
        '250': '2.5', // Aumenta o elemento para 2.5x
        '300': '3',   // Aumenta o elemento para 3x
        '400': '4',   // Aumenta o elemento para 4x (se necessário)
      },
    },
  },
  plugins: [],
}
