const { default: flattenColorPalette} = require("tailwindcss/lib/util/flattenColorPalette");
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evergarden: {
          50: ""
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#d01be0",
            foreground: "#fff",

          },
          focus: "#9e25a8",
        }
      }
    }
  }), addVariableForColors],
}


function addVariableForColors({addBase, theme}) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key,val]) => [`--${key}`, val])
  )

  addBase({
    "root": newVars,
  })
}
