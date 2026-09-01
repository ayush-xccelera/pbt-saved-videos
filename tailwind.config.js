/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pbt-pink": "#b4406a",
        "pbt-pink-light": "#faebf1",
        "background-grey": "#f5f7f8",
        "grey-blue-accent": "#e4e9ed",
        "dark-grey-blue": "#6d7b87",
        "muted-grey": "#828282",
        "foundation-bg": "#ddf4d5",
        "foundation-text": "#548445",
        "medium-bg": "#fde7d3",
        "medium-text": "#d67d4a",
        "difficult-bg": "#ffe0e4",
        "difficult-text": "#d74e67",
      },
      fontFamily: {
        izmir: ["Izmir", "Poppins", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        card: "2px 2px 9px 0px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
