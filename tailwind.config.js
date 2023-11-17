/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // custom classes
      // height: {
      //   '16': '4rem',
      //    Set your custom height, for example, 4rem (16px)
      //   '20': '5rem',
      //    Another custom height, for example, 5rem (20px)
      // },
    },
  },
  plugins: [],
}

