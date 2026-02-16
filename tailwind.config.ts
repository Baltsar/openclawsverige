import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "Fira Code", "monospace"],
      },
      colors: {
        "bg-deep": "var(--bg-deep)",
        "bg-surface": "var(--bg-surface)",
        "bg-card": "var(--bg-card)",
        "bg-code": "var(--bg-code)",
        border: "var(--border)",
        /* Aliases for existing components (blog, ui) */
        background: "var(--bg-deep)",
        foreground: "var(--text-primary)",
        muted: "var(--text-muted)",
        "muted-foreground": "var(--text-muted)",
        primary: "var(--crayfish-red)",
        secondary: "var(--bg-surface)",
        "crayfish-red": "var(--crayfish-red)",
        "crayfish-light": "var(--crayfish-light)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "nordic-blue": "var(--nordic-blue)",
        "nordic-blue-light": "var(--nordic-blue-light)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
      },
      spacing: {
        "sp-1": "var(--sp-1)",
        "sp-2": "var(--sp-2)",
        "sp-3": "var(--sp-3)",
        "sp-4": "var(--sp-4)",
        "sp-5": "var(--sp-5)",
        "sp-6": "var(--sp-6)",
        "sp-8": "var(--sp-8)",
        "sp-10": "var(--sp-10)",
        "sp-12": "var(--sp-12)",
        "sp-16": "var(--sp-16)",
        "sp-20": "var(--sp-20)",
      },
      borderRadius: {
        "radius-sm": "var(--radius-sm)",
        "radius-md": "var(--radius-md)",
        "radius-lg": "var(--radius-lg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
