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
        // Mission plate — a stark condensed grotesque
        display: ['"Archivo Narrow"', '"IBM Plex Sans"', "sans-serif"],
        heading: ['"Archivo Narrow"', '"IBM Plex Sans"', "sans-serif"],
        // Telemetry — a precise monospace for data and labels
        tele: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
        // Reading copy — a calm humanist sans
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
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
        /* ---- mission palette ---- */
        deep: {
          DEFAULT: "hsl(var(--deep) / <alpha-value>)",
          2: "hsl(var(--deep-2) / <alpha-value>)",
        },
        hull: "hsl(var(--hull) / <alpha-value>)",
        ice: {
          DEFAULT: "hsl(var(--ice) / <alpha-value>)",
          dim: "hsl(var(--ice-dim) / <alpha-value>)",
        },
        rule: "hsl(var(--rule) / <alpha-value>)",
        gold: "hsl(var(--gold) / <alpha-value>)",
        "on-gold": "hsl(var(--on-gold) / <alpha-value>)",
        signal: "hsl(var(--signal) / <alpha-value>)",
        dust: "hsl(var(--dust) / <alpha-value>)",
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
      transitionTimingFunction: {
        // Long, weighty, IMAX-ish
        transit: "cubic-bezier(0.16, 1, 0.3, 1)",
        gravity: "cubic-bezier(0.65, 0, 0.35, 1)",
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
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
