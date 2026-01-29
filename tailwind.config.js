/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
    keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '8ch' }, // length of "Welcome"
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 2s steps(7) infinite alternate',
        blink: 'blink 0.75s step-end infinite',
      },
    
  },
  plugins: [],
};
