/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontSatoshi: ["Satoshi", "sans-serif"],
        fontJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },

      colors: {
        customBlack: "#121212",
        customHighLightPrimary: "#C0FF73",
        customHighLightSecondary: "#F9FFF3",
        customTextPrimary: "#FFFFFF",
        customTextSecondary: "#C8C8C8",
        customBorderPrimary: "#2B2B2B",
        customCardBackground: "#171717",
        customHeaderLink: "#7F6A57",
      },

      screens: {
        larg: "1550px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
