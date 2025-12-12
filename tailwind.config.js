module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./public/index.html"],
  theme: {
    container: {
      center: true, // Centers all containers by default
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    // You can also customize the screen breakpoints themselves here
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
