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
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), addVariableForColors],
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
