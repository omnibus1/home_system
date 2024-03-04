/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-100" : "#FFA400",
        "primary-200" : "#009FFD",
        "primary-300" : "#2A2A72",
        "primary-400" : "#232528",
        "primary-500" : "#EAF6FF"
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}