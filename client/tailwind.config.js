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
          light: '#f3f7fa',
          accent: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        outfit: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      // Brand type scale — mobile size by default, `-lg` variant from the md breakpoint up.
      fontSize: {
        'h1': ['34px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1-lg': ['52px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['28px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2-lg': ['36px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h3': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3-lg': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body': ['16px', { lineHeight: '1.65' }],
        'body-lg': ['18px', { lineHeight: '1.65' }],
        'nav': ['16px', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}
