/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      'rose-50': '#FFF7FB',
      'rose-800': '#7A284E',
      'stone-100': '#F3E5D7',
      'stone-150': '#E3DDD7',
      'stone-600': '#5F564D',
      'stone-900': '#312E2C',
      'brown-800': '#854632', 
      'white':'#FFFFFF', 

    },
    extend: {
      fontFamily:{
        'outfit-Black':[ 'Outfit-Black', 'sans-serif'],
        'outfit-Bold':[ 'Outfit-Bold', 'sans-serif'],
        'outfit-ExtraBold':['Outfit-ExtraBold', 'sans-serif'],
        'outfit-ExtraLight':['Outfit-ExtraLight','sans-serif'],
        'outfit-Light':['Outfit-Light', 'sans-serif'],
        'outfit-Medium':['Outfit-Medium', 'sans-serif'],
        'outfit-Regular':['Outfit-Regular', 'sans-serif'],
        'outfit-SemiBold':[ 'Outfit-SemiBold', 'sans-serif'],
        'outfit-Thin':[,'Outfit-Thin', 'sans-serif'],
        'youngSerif-Regular':[ 'YoungSerif-Regular', 'sans-serif'],

      }
    },
  },
  plugins: [],
}