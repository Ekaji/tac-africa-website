module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {   
      colors: {
        'main_blue': '#17466C', //Blue
        'light_blue': '#27557A', //Light_Blue
        'lighter_blue': '#17466C', //Lighter_Blue
        'lightest_blue': '#477E8F', //Lightest_Blue
        'transparent_blue': '#6E9AA8', //Transperent_Blue
        'sweet_blue': '#144388', 
        'deep_blue': '#06295D',
        'dark_blue': '#0B3658', //Dark_Blue
        'main_grey': '#E8F0F6', //Grey
        'light_grey': '#787878', //Light_Grey
        'lighter_grey': '#F2F6FA', //Lighter_Grey 
        'main_white': '#FFFFFF', //Grey
        'main_yellow': '#FFC34E', //Yellow
      },
      fontSize: { 
        '4md': ['2.5rem', '2.7rem']
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.5rem',
      },
      height: {
        '30vh': '30vh',
        '70vh': '70vh',
        '90vh': '90vh',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}