module.exports = {
  content: [
    "./src/**/*.{html,js}",
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
  theme: {
    colors: {
      primary: '#3256a4',
      secondary: '#F0E319',
      dimGray: '#C2C2C2',
      lightBlue: '#1B99E5',
      deepGray: '#393a3c',
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}
