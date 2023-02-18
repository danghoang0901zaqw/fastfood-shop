/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/images/banner.jpeg')",
        'banner-2': "url('/src/assets/images/banner-02.jpeg')",
      },
    },
  },
  plugins: [],
};
