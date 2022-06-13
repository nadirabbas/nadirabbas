module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#111",
        "accent-fg": "#222",
      },
      fontFamily: {
        fond: ["Fondamento", "cursive"],
        nun: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        "primary-light": "0 0 15px 0 #fff",
        "primary-light-big": "0 0 20px 0 #fff",
      },
    },
  },
  plugins: [],
};
