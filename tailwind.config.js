/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'navcolor': '#006AA6',
        'submitbtn': '#3F9FD3',
        'hoversubmit': '#5AB0DB',
        'hovergooglelogin': '#F9FBFF',
        'search': '#005585',
        'downloadapp': '#3397CF',
        'darkblue': '#002032',
        'followbtn': '#F0F1F2'

      },
      textColor: {
        'forgetpass': '#33B1E4',
        'logingray': '#7F7F7F',
        'eyegray': '#F5F6F7',
        'submitbtn': '#3F9FD3',
        'sidebargray': '#59798B',
        'darkblue': '#002032',
        'lightblue': '#3397CF',

      },
      width: {
        'modalWidth': '722px',
      },
      minWidth: {
        'min25': '100px',
      },
      maxWidth: {
        'containerWidth': '728px',
        'postWidth': '608px',
      },
      height: {
        'boardListHeight': '500px',
      }
    },
  },
  plugins: [],
}
