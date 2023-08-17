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
      "title-color": "#111a28",
      "black-2": "#1d2a38",
      "gray-3": "#e5e7eb",
      "gray-4": "#7d879c",
      "gray-5": "#64748b",
      "gray-6": "#4b5563",
      "my-accent": "#16b4ac",
      "my-primary": "#10847e",
      "slate-1": "#f1f5f9",
      "slate-3": "#cbd5e1",
      "slate-6": "#475569",
      "my-pink": "#eb3a7b",
      "red-500": "#ef4444",
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
