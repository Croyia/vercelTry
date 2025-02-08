/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      valentine: {
        primary: '#027DC5',   
        secondary: '#A0C3E2',  
        accent: '#D8EFF1',     
        egg: '#F0F0EE', 
        error: '#FF565B'      
      }
    }},
  },
  plugins: [],
}