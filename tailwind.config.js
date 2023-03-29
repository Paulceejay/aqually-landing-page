/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xss: "425px",
      xs: "475px",
      sm: "640px",
      ms: "700",
      md: "768px",
      lmd: "950px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primaryColor: "#0000FF",
        grayPrimaryColor: "#333333",
        graySecondaryColor: "#4F4F4F",
        grayColor: "#F2F2F2",
        darkColor: "#1F1F1F",
        white: "#FFFFFF",
        copyrightColor: "#E0E0E0",
        gradientColor1: "#3C17C2",
        gradientColor2: "#EE5C0D",
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
