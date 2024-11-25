import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pattern": "url('/footer-pattern.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg_color: "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
