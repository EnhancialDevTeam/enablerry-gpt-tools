/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#164f2c', // Updated primary color
          light: '#1d6338',
          dark: '#0f3b21',
        },
        secondary: {
          DEFAULT: '#FF8A00',
          light: '#FFA133',
          dark: '#CC6E00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};