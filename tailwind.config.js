module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200% 200%',  // gives class bg-[200%_200%]
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 3s linear infinite',
      },
    },
  },
  plugins: [],
};