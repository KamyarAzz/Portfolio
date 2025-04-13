/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#9db0ec",
        secondaryColor: "#6c55e0",
        darkBg: "#2C2C2C",
        darkCharcoal: "#303030",
        lightBg: "#F8F7F4",
        lightPeachBg: "#FEFAF6",
        mainRed: "#b91c1c",
        darkGray: "#1f1f1f",
        lightGray: "#808080",
        softGray: "#fdfdfd",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        "right-portal": "0px 0px 22px 5px #b91c1c",
        "left-portal": "0px 0px 22px 5px #b91c1c",
        "nav-dark": "0px 2px 8px #1e1e1e",
        "nav-light": "0px 2px 8px #ddd",
        "dropdown-dark": "0px 0px 3px #0c0c0c inset",
        "dropdown-light": "0px 0px 3px #cccccc inset",
        "input-dark": "0px 0px 3px #000000",
        "input-light": "0px 0px 3px #999",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
