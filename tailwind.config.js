/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"rgba(var(--background))",
        border:"rgba(var(--border))",
        card:"rgba(var(--card))",
        "primary":"rgba(var(--copy-primary))",
        "secondary":"rgba(var(--copy-secondary))",
        "cta-text":"rgba(var(--cta-text))",
        "cta-active":"rgba(var(--cta-active))",
        cta:"rgba(var(--cta))",

      }
    },
  },
  plugins: [],
}