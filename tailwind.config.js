/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        Alexandria: ["Alexandria", "sans-serif"],
      },
      backgroundImage: {
        medicine:
          "url('https://img.freepik.com/free-photo/abstract-paper-background-concept_23-2148812686.jpg?w=826&t=st=1694759448~exp=1694760048~hmac=d6e928e141b470879a9613fa163ab153affef3b3e3b82a195234ecf8c24ea6bf')",
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
      "gray-7": "#374151",
      "my-accent": "#10B6A8",
      "my-primary": "#006F70",
      "slate-1": "#f1f5f9",
      "slate-3": "#cbd5e1",
      "slate-6": "#475569",
      "slate-7": "#475569",
      "my-pink": "#eb3a7b",
      "red-400": "#f87171",
      "red-500": "#ef4444",
      "yellow-500": "#fbb614",
    },
  },
  daisyui: {
    // themes: ["light"],
    themes: [
      {
        mytheme: {
          primary: "#006F70",
          secondary: "#10B6A8",
          accent: "#16b4ac",
          neutral: "#1d2a38",
          "base-100": "#ffffff",
          info: "#82a7e3",
          success: "#177d4c",
          warning: "#fac20a",
          error: "#f53a19",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
