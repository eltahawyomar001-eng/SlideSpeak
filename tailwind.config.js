/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(214.3 31.8% 91.4%)",
        input: "hsl(214.3 31.8% 91.4%)",
        ring: "hsl(221.2 83.2% 53.3%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 84% 4.9%)",
        primary: {
          DEFAULT: "hsl(221.2 83.2% 53.3%)",
          foreground: "hsl(210 40% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        muted: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        gray: {
          900: "#101828",
          600: "#475467",
          100: "#F2F4F7",
        },
        brand: {
          600: "#1570EF",
          500: "#2E90FA",
        },
        "gray-blue": {
          50: "#F8F9FC",
          100: "#EAECF5",
        },
        success: {
          600: "#039855",
          50: "#ECFDF3",
        },
        rose: {
          600: "#E31B54",
          500: "#F63D68",
          50: "#FFF1F3",
        },
        "orange-dark": {
          500: "#FF4405",
        },
        slidespeak: {
          navy: "#1D1C2B",
          purple: "#6658E1",
          orange: "#FF6817",
          blue: "#4F8EF7",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
