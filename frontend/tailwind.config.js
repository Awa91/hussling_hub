/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //A range of Breakpoints customization
    screens: {
      sm: { min: "640px", max: "767px" },
      //=> @media (min-width: 640px and max-width: 767px){...}
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        "header-desktop": "url('/public/img/bg-header-desktop.svg')",
        "header-mobile": "url('/public/img/bg-header-mobile.svg')",
      },
      colors: {
        cyan: {
          primary: "hsl(180, 29%, 50%)",
          "bg-color": "hsl(180, 31%, 95%)",
          "filter-color": "hsl(180, 31%, 95%)",
          dark: "hsl(180, 8%, 52%)",
          "very-dark": "hsl(180, 14%, 20%)",
        },
      },
      dropShadow: {
        lg: "0 10px 8px hsla(180, 29%, 50%, 0.2)",
      },
      fontFamily: {
        body: ["League Spartan"],
      },
      fontSize: {
        base: "0.9375rem",
      },
      screens: {
        sm: "376px",
        md: "1153px",
      },
    },
  },
  plugins: [],
};
