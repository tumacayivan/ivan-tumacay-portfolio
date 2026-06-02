import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Bebas Neue"', '"Anton"', '"Oswald"', "sans-serif"],
        body: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"],
        typewriter: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"],
        courier: ['"JetBrains Mono"', '"Courier Prime"', '"Cutive Mono"', "monospace"],
        cutive: ['"Cutive Mono"', '"Courier Prime"', "monospace"],
        stencil: ['"Oswald"', '"Bebas Neue"', "sans-serif"],
        blackops: ['"Bebas Neue"', '"Anton"', '"Oswald"', "sans-serif"],
        display: ['"Anton"', '"Bebas Neue"', "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        classified: {
          red: "hsl(var(--accent-red))",
          "red-deep": "hsl(var(--accent-red-deep))",
          "red-bright": "hsl(var(--accent-red-bright))",
          bone: "hsl(var(--accent-bone))",
          concrete: "hsl(var(--accent-concrete))",
          graphite: "hsl(var(--accent-graphite))",
          blueprint: "hsl(var(--accent-blueprint))",
        },
        "gold-glow": "hsl(var(--gold-glow))",
        "surface-hover": "hsl(var(--surface-hover))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "siren": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 10px hsl(var(--accent-red) / 0.6))" },
          "50%": { opacity: "0.6", filter: "drop-shadow(0 0 18px hsl(var(--accent-red) / 0.9))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        "siren": "siren 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
