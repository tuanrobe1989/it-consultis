/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.js',
    './../*.{php, html}',
    './../**/*.{php, html}',
    './../**/**/*.{php, html}',
    './../*.txt',
    '**/**/*.txt',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '575px',
      'sm1': '690px',
      'sm2': '750px',
      'md': '768px',
      'mdd': '920px',
      'lg': '992px',
      'lg2': '1140px',
      'xl': '1440px',
    },
    extend: {
      height: {
        '26': '6.25rem',
      },
      width: {
        '26': '6.25rem',
      },
      inset: {
        '26': '6.25rem',
      },
      colors: {
        white: '#fff',
        black: '#000',
        'secondary-black': '#111',
        'third-black': '#333',
        'light-gray': '#f3f3f3',
        'normal-gray': '#f8f8f8',
        'dark-red': '#870000',
        'dark-red-2': '#710000',
        'dark-gray': '#717171',
        'border-gray': '#dcdc',
      },

    },
  },
  //   plugins: [
  //     require('tailwindcss'),
  //     require('autoprefixer'),
  //  ],
}

