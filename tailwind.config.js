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
        medicine: "url('https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais')",
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
          secondary: "#006F70",
          accent: "#10B6A8",
          neutral: "#25212b",
          "base-100": "#ffffff",
          info: "#5389d5",
          success: "#22c55e",
          warning: "#f4c271",
          error: "#e92d1c",

        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
