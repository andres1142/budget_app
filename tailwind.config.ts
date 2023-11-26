import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary_white: {
          DEFAULT: "#FFFFFF",
          100: "#EEEEF1",
          200: "#D7D7DA",
        },
        secondary_gray: {
          DEFAULT: "#404045",
          100: "#2C2C2F",
        },
        secondary_pink: {
          DEFAULT: "#FE356D",
        },
        primary_black: {
          DEFAULT: "#131315",
        },
      },
      fontFamily: {
        motivaBold: "var(--font-motivaBold)",
        motivaLight: "var(--font-motivaLight)",
        motivaLigthItalic: "var(--font-motivaLightItalic)",
        motivaMedium: "var(--font-motivaMedium)",
        motivaRegular: "var(--font-motivaRegular)",
        motivaThin: "var(--font-motivaThin)",
      },
    },
  },
  plugins: [],
}
export default config
