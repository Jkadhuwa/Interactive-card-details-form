/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts jsx, js}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgImgDesktop': "url('/bg-main-desktop.png')",
        'bgImgMobile':"url('/bg-main-mobile.png')"
      },
      screens:{
        'xs': '475px',
        'sm': '576px',
        '3xl': '1600px'

      }

    },
  },
  plugins: [require("daisyui")],
}
