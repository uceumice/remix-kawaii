/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./application/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
        }
      }, {
        light: {
          "color-scheme": "light",
          primary: "#b8b8b8",
          secondary: "#b8b8b8",
          accent: "#b8b8b8",
          neutral: "#ebebeb",
          "base-100": "#ffffff",
          "base-200": "#eeeeee",
          "base-300": "#dddddd",
          info: "#0000ff",
          success: "#008000",
          warning: "#a6a659",
          error: "#ff0000",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--animation-btn": "0",
          "--animation-input": "0",
          "--btn-text-case": "lowercase",
          "--btn-focus-scale": "1",
          "--tab-radius": "0",
        },
      }],
  },
};
