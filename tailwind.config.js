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
        statistics: "url('/images/statistics-bg.png')",
        "hero-1": "url('/images/hero-bg-1.png')",
        "hero-2": "url('/images/hero-bg-2.png')",
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
        "custom-md": "2px 2px 5px 0px #9ca3af",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
