/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        triton: {
          blue: '#003B5C', // UCSD dark blue
          yellow: '#FFCD00', // UCSD gold (use sparingly)
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};


