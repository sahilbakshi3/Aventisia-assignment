/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#EEF2FF",
          ring: "rgba(79,70,229,0.15)",
        },
        secondary: {
          DEFAULT: "#1E1B4B",
          light: "#2D2A60",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.10)",
        modal: "0 20px 60px rgba(0,0,0,0.22)",
        btn: "0 2px 8px rgba(79,70,229,0.35)",
        "btn-hover": "0 4px 14px rgba(79,70,229,0.45)",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: {
          from: { opacity: 0, transform: "translateY(14px) scale(0.97)" },
          to: { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        toastIn: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.15s ease",
        slideUp: "slideUp 0.2s ease",
        toastIn: "toastIn 0.2s ease",
        slideInRight: "slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
