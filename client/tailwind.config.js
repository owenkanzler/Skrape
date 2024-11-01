/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#12110F",
        bg2: "#1C1816",
        interactive: "#28211D",
        border: "#4D3C2F",
        text: "#F2E1CA",
        text2: "#B1A697",
        error: "#E54D2E",
        success: "#46A758",
      },
      fontFamily: {
        body: ["Montserrat", "Exo"],
      },
    },
  },
  plugins: [],
};
