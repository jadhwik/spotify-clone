/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        new: ['new', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
}

