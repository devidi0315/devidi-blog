import type { Config } from "tailwindcss";

function pxToRem(px: number) {
  return px / 16
}

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
    },
    fontSize: {
      h1: `${pxToRem(38)}rem`,
      h2: `${pxToRem(32)}rem`,
      h3: `${pxToRem(28)}rem`,
      h4: `${pxToRem(24)}rem`,
      body1: `${pxToRem(20)}rem`,
      body2: `${pxToRem(16)}rem`,
      caption: `${pxToRem(12)}rem`,
    },
  },
  plugins: [],
};
export default config;

