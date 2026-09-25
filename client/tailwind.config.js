/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f3a5e',
        blue: '#005f9e',
        tint: '#f3f7fa',
        ink: '#1f2937',
        brand: {
          dark: '#0f3a5e',
          primary: '#005f9e',
          light: '#e6f0f9',
          accent: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        outfit: ['Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
