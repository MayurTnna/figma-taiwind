/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "left-experience": "url(/src/assets/images/mainexperiencegot.svg)",
        testi1: "url(/src/assets/images/test1.svg)",
        testiWhitebg: "url(/src/assets/images/Union.svg)",
      },
      colors: {
        "text-white": "#FFFFFF",
        orange: "#E58411",
        "text-black": "#1E1E1E",
        "product-text-color": "#0D1B39",
        "footer-text-color": "#f6973f",
      },
      fontFamily: {
        "Gilroy-Bold": ["Gilroy-Bold", "sans-sarif"],
        "Gilroy-Medium": ["Gilroy-Medium", "sans-sarif"],
        "Gilroy-Regular": ["Gilroy-Regular", "sans-sarif"],
        "Inter-Regular": ["Inter-Regular", "sans-sarif"],
        "DM-Sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
