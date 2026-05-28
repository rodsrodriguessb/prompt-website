/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF8',
        charcoal: '#1a1a1a',
        gold: {
          50: '#fdfcf7',
          100: '#faf6e8',
          200: '#f4ebc8',
          300: '#ebdba0',
          400: '#d4b85a',
          500: '#c9a227',
          600: '#b89223',
          700: '#96751d',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
