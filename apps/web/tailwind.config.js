/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Prompt Lisbon brand tokens
        ink: '#131316',
        'ink-soft': '#4a4a52',
        'ink-faint': '#8a8a93',
        hair: '#e8e8ea',
        'hair-soft': '#f0f0f1',
        'events-band': '#fcfcfc',
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        cta: '0 14px 34px -14px rgba(19,19,22,0.55)',
        embed: '0 30px 70px -40px rgba(19,19,22,0.22)',
      },
    },
  },
  plugins: [],
};
