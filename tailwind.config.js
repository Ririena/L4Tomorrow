import { nextui } from "@nextui-org/react";

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
        violet: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          white: "#FFFFFF",
          transparent: "transparent",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        "violet-white": {
          extend: "light",
          colors: {
            background: "#ffffff",
            foreground: "#0D001A",
            primary: {
              50: "#fefcfd",
              100: "#EAD3FD",
              200: "#D2A9FB",
              300: "#B47CF3",
              400: "#975AE8",
              500: "#6D28D9",
              600: "#541DBA",
              700: "#3E149C",
              800: "#2B0C7D",
              900: "#1D0768",
              DEFAULT: "#6621d2",
              foreground: "#0D001A",
            },
            focus: "#5D16CB",
          },
        },
        light: {
          colors: {
            background: "#fefcfd", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              50: "#fefcfd",
              100: "#EAD3FD",
              200: "#D2A9FB",
              300: "#B47CF3",
              400: "#975AE8",
              500: "#6D28D9",
              600: "#541DBA",
              700: "#3E149C",
              800: "#2B0C7D",
              900: "#1D0768",
              foreground: "#FFFFFF",
              DEFAULT: "#6c21e1",
            },
            
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              50: "#fefcfd",
              100: "#EAD3FD",
              200: "#D2A9FB",
              300: "#B47CF3",
              400: "#975AE8",
              500: "#6D28D9",
              600: "#541DBA",
              700: "#3E149C",
              800: "#2B0C7D",
              900: "#1D0768",
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};