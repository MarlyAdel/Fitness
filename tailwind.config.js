/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        container:{
            center: true,
            padding:{
              DEFAULT:'1rem',
              sm:'2rem',
              md:'3rem',
              lg:'4rem'
            }
        },
        fontFamily: {
        oswald: 'var(--font-Oswald)',
        roboto: 'var(--font-Roboto)',
      },
    },
    
  },
  plugins: [],
};
