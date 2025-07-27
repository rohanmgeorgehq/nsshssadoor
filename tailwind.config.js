module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      padding: {
        "5vw": "5vw",
      },
      height: {
        "100vh": "100vh",
      },
      colors: {
        secondary: "#FFBF78",
        primary: "#FF7D29",
        "font-primary": "#3d3d3d",
        "font-secondary": "#6d6d6d",
        white: "#fff",
        white_shade: "#fcfcfc",
        "primary-50": "#fff6ed",
        "primary-100": "#ffebd4",
        "primary-200": "#ffd2a8",
        "primary-300": "#ffb271",
        "primary-400": "#ff7d29",
        "primary-500": "#fe6411",
        "primary-600": "#ef4a07",
        "primary-700": "#c63408",
        "primary-800": "#9d2b0f",
        "primary-900": "#7e2610",
        "primary-950": "#440f06",
      },
      boxShadow: {
        custom: "0px 8px 24px rgba(149, 157, 165, 0.2)",
      },
      backgroundImage: {
        banner: "url('/images/banner.webp')",
      },
    },
  },
  plugins: [],
};
