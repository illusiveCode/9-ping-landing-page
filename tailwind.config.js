/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#4C7BF3",
          navy: "15202A",
        },
        neutral: {
          grey: "#969696",
          smurf: "#C2D3FF",
          "light-blue": "#B8C7ED",
          white: "#FFFFFF",
        },
      },
      screens: {
        mobile: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1200px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        primary: '"Libre Franklin", sans-serif',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
