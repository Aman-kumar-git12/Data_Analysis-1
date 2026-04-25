import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'github-dark': '#0d1117',
        'github-dark-secondary': '#161b22',
        'github-border': '#30363d',
        'github-text-primary': '#c9d1d9',
        'github-text-secondary': '#8b949e',
        'github-blue': '#1f6feb',
        'github-green': '#238636',
        'github-green-hover': '#2ea043',
      },
    },
  },
  plugins: [typography],
}
