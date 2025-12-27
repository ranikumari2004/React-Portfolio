/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Dark mode logic
  theme: {
    extend: {
      // 1. Custom Animations Define karein
      animation: {
        blob: "blob 7s infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        // Shimmer ke liye hum arbitrary value use kar rahe hain code mein, 
        // lekin yahan register karna achi practice hai.
      },
      // 2. Keyframes (Animation steps)
      keyframes: {
        // Shine Effect Button ke liye
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        // Background Blobs (Move hone wale colors)
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        // Chatbot open hone ka animation
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
    },
  },
  plugins: [],
}