import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#164e63",       
          "secondary": "#4f46e5",     
          "accent": "#fdba74",     
          "neutral": "#134e4a",     
          "base-100": "#111827",     
          "info": "#38bdf8",     
          "success": "#22c55e",     
          "warning": "#f97316",    
          "error": "#e11d48",
          },
        },
      ],
    },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
