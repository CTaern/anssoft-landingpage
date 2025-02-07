/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Adjust these paths to match your project structure
      "./src/**/*.{js,jsx,ts,tsx}",
      // If you have .html or other file types where Tailwind classes may appear, include them as well
      "./public/index.html",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  