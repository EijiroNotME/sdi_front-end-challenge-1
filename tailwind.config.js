/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#181818',
        accent: '#EB0A1E',

        paragraph: '#414141',
      },
    },
    },
  plugins: [],
}

