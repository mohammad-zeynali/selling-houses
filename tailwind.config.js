/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        light: "#f9f9f9",
        danger: "#e65540",
      },
      fontFamily: {
        openSansRegular: ["openSansRegular"],
        openSansMedium: ["openSansMedium"],
        openSansBold: ["openSansBold"],
      },
    },
  },
  plugins: [],
};
