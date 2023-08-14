/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      lite: "#F2F3F5",
      black: "#000",
      "my-primary": "#10847e",
      "my-accent": "#16b4ac",
      "my-pink": "#eb3a7b",
      "gray-3": "#e5e7eb",
      "gray-5": "#64748b",
      "gray-6": "#4b5563",
      "slate-3": "#cbd5e1",
      "slate-6": "#475569",
      "title-color": "#111a28",
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
