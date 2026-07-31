import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      primary: '#102a43',
      secondary: '#1d4ed8',
      accent: '#93c5fd',
      light: '#eaf4ff',
      lighter: '#f0f6ff',
      'blue-50': '#f0f6ff',
      'blue-100': '#DEEEFE',
      'blue-200': '#b9d5f8',
      'blue-250': '#b2d5f8',
      'blue-300': '#cbe3fb',
      'gray-300': '#cbd5e1',
      'gray-600': '#334155',
    },
  },
} satisfies Config
