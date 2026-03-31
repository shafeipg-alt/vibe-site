/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 0 1px rgba(192,132,252,0.25), 0 10px 30px rgba(192,132,252,0.15)',
      },
    },
  },
  plugins: [],
}

