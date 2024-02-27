/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-img': "url('images/bg-main-mobile.png')", 
        'desktop-img': "url('images/bg-main-desktop.png')", 
      },
      fontFamily: {
        custom: ['Space Grotesk'],
      },
      borderColor: theme => ({
        'custom-gradient': `linear-gradient(to right, ${theme('colors.purple.500')}, ${theme('colors.purple.900')})`,
      }),
      colors: {
        red: 'hsl(0, 100%, 66%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrayishViolet: 'hsl(270, 3%, 87%)',
        darkGrayishViolet: 'hsl(279, 6%, 55%)',
        veryDarkViolet: 'hsl(278, 68%, 11%)',
      }
    },
  },
  plugins: [],
}

