/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lblue: "#fffff",
        dblue: "#1d2836",
      },
      backgroundImage: {
        "heroimg-pattern": 'url("/src/assets/Images/Kuiro-bg.png")',
      },
      dropShadow: {
        "3xl": "0 10px 20px rgba(255, 255, 255, 0.3)",
        "4xl": [
          "0 35px 35px rgba(255, 255, 255, 0.25)",
          "0 45px 65px rgba(255, 255, 255, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
