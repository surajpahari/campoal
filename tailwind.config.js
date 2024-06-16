/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        //navbar breaking points
        "mnb": '1353px',
        "snb": '850px',
      },
      colors: {
        'dark-blue': '#2B2B39',
        'orange-ash': '#F5EFE0',
        'faint-purple': '#5F5F75',
        'light-purple': '#6059C9',
        'dark-yellow': '#FFC20E',

      },
      fontFamily: {
        'sen': ['Sen', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
///** @type {import('tailwindcss').Config} */
//module.exports = {
//  content: [
//    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//    "./components/**/*.{js,ts,jsx,tsx,mdx}",
//    "./app/**/*.{js,ts,jsx,tsx,mdx}",
//  ],
//  theme: {
//    extend: {
//      backgroundImage: {
//        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//        "gradient-conic":
//          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//      },
//    },
//  },
//  plugins: [],
//};
