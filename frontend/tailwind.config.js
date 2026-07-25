/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-pink': '#FF80B0',
        'brutal-lime': '#C4FF4D',
        'brutal-purple': '#7D6AF0',
        'brutal-blue': '#4D9FFF',
        'brutal-yellow': '#F3F03D',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
