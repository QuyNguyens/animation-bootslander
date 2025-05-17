/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#64748B",
        accent: "#F59E0B",
        "blue-500": "#10058c",
        "blue-700": "#08005e",
        "green-btn": "#1acc8d",
        "green-btn-hv": "#169e6e",
        "blue-word": "#040677",
        "gray-word": "#444444",
        "purple-200": "#f4f5fe",
        "blue-img": "#08005e",
        "bg-main" : "#f7fafc"
      },
      rotate: {
        45: '45deg',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
