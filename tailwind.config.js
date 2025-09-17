/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#F47820",
        },
        secondary: {
          DEFAULT: "#5A5A5A",
        },
        success: {
          DEFAULT: "#16A34A",
        },
        destructive: {
          DEFAULT: "#EC221F",
        },
        background: {
          DEFAULT: "#FFFFFF",
        },
        foreground: {
          DEFAULT: "#111827",
        },
      },
      borderRadius: {
        lg: "0.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 0 rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
}

