/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-yellow": "#FFD600",
        "primary-yellow-dark": "#FFBD08",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      boxShadow: {
        "yellow-down": "-20px 20px 0 0 #FFD600",
        double:
          "-2px 2px 5px 0px rgb(209, 213, 219), 30px -30px 0px 0px rgb(255, 214, 0)",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
