import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pumpkin-orange": "#FA8B02",
        "light-gray": "#EFEFEF",
        "dark-gray": "#333333",
      },
      fontFamily: {
        podcast: ["Podcast", "sans-serif"],
      },
      screens: {
        "custom-screen": "1353px",
        "custom-screen-2": "750px",
        "screen-1024": "1024px",
        screen: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
