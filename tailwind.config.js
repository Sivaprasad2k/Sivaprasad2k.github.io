/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sys: {
          bg: "#070a0f",
          surface: "#0d121d",
          surfaceHover: "#121828",
          surfaceActive: "#192236",
          border: "#1e293b",
          borderGlow: "#334155",
          accent: "#0ea5e9",
          emerald: "#10b981",
          indigo: "#6366f1",
          amber: "#f59e0b",
          rose: "#f43f5e",
          text: "#f8fafc",
          muted: "#94a3b8",
          subtle: "#64748b",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-right': 'flowRight 2s linear infinite',
      },
      keyframes: {
        flowRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
