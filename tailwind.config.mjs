/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        mono: [
          "ProFont",
          "Menlo",
          "Monaco",
          "Lucida Console",
          "Liberation Mono",
          "DejaVu Sans Mono",
          "Bitstream Vera Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
      keyframes: {
        cradle: {
          "0%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
          "100%": {
            transform: "rotate(-5deg)",
          },
        },
      },
      animation: {
        cradle: "cradle 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
