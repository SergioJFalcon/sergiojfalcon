/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-kb-theme="dark"]'],
  content: [
    "./src/**/*.{html,js,jsx,md,mdx,ts,tsx}"
    ],
  theme: {
    extend: {},
  },
  presets: [require("./ui.preset.cjs")],
  plugins: [
    require('@tailwindcss/typography'),],
}

