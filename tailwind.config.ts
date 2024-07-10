import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text1: 'var(--color-text1)',
      text2: 'var(--color-text2)',
      hint: 'var(--color-hint)',
      bg: 'var(--color-bg)',
      cardBg: 'var(--color-card-bg)',
      transparent: 'transparent',
      success: 'var(--color-success)',
    },
    fontSize: {
      h1: `var(--font-size-h1)`,
      h2: `var(--font-size-h2)`,
      h3: `var(--font-size-h3)`,
      h4: `var(--font-size-h4)`,
      body1: `var(--font-size-body1)`,
      body2: `var(--font-size-body2)`,
      caption: `var(--font-size-caption)`,
    },
  },
  plugins: [],
};
export default config;

