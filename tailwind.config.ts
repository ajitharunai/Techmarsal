import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080A0F',
        'bg-secondary': '#0E1117',
        'card-surface': '#161B22',
        'text-primary': '#FFFFFF',
        'text-secondary': '#8B949E',
        'ai-blue': '#38BDF8',
      },
    },
  },
  plugins: [],
};
export default config;
