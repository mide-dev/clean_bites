/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     // sm: "2rem",
    //     lg: "2rem",
    //     xl: "2rem",
    //     // "2xl": "5rem",
    //   },
    //   screens: {
    //     // sm: "600px",
    //     // md: "768px",
    //     // lg: { min: "1270px", max: "1279px" },
    //     // xl: "1280",
    // "3xl": "1680",
    //   },
    // },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        custom_accent: "var(--clr-accent)",
        custom_primary_50: "var(--clr-primary-50)",
        custom_primary_100: "var(--clr-primary-100)",
        custom_primary_200: "var(--clr-primary-200)",
        custom_primary_300: "var(--clr-primary-300)",
        custom_primary_400: "var(--clr-primary-400)",
        custom_primary_500: "var(--clr-primary-500)",
        hygiene_excellent: "var(--clr-hygiene-excellent)",
        hygiene_average: "var(--clr-hygiene-average)",
        hygiene_poor: "var(--clr-hygiene-poor)",

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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
