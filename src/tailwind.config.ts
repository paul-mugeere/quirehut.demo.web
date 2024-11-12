import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "qh-emerald": {
          50: "#E1FEF5",
          100: "#C4FDEB",
          200: "#8EFBD8",
          300: "#52F9C4",
          400: "#1CF7B2",
          500: "#07CF90",
          600: "#059669", //As the secondary
          700: "#04714F",
          800: "#024A33",
          900: "#01271B",
          950: "#01140E"
        },
        "qh-yellow": {
          50: "#FDF5ED",
          100: "#FBE9D5",
          200: "#F6D4AC",
          300: "#F2BE82",
          400: "#EEA859",
          500: "#EA9534",
          600: "#D97E17",
          700: "#AF6612",
          800: "#854D0E", //As the accent 
          900: "#412607",
          950: "#201303"
        },
        "qh-slate": {
          50: "#F7F9FD",
          100: "#E9EFF7",
          200: "#C7D4E6",
          300: "#ABBCD3",
          400: "#94A3B8",
          500: "#6584AE",
          600: "#446798",
          700: "#2D4E7B",
          800: "#193357",
          900: "#0A192E",
          950: "#030B16"
        }
      }
    }
  },
  plugins: [],
};
export default config;
