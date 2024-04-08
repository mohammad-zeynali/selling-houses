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
        light: "#F4F4F4",
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
