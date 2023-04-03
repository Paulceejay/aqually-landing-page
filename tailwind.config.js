/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsss: "310px",
      xss: "400px",
      xs: "475px",
      sm: "640px",
      smm: "590px",
      ms: "701",
      md: "768px",
      smd: "820px",
      lmd: "950px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "product1-bg-img": "url('/images/product1.jpg')",
      },
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
        productsBg: "#FBFBFB",
      },
      boxShadow: {
        "product-shadow": " 8px 4px 120px rgba(31, 31, 31, 0.2)",
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
