/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-green": "#002C15",
        argent: "#c1c1c1",
        "key-lime": "#E5FB97",
        "raisin-black": "#1E1E24",
        "anti-flash-white": "#EDEFF7",
        gainsboro: "#DEDEE0",
        "jungle-green": "#2A9D8F",
        "magic-mint": "rgba(162, 240, 202, 0.39)",
        pear: "#C2F43D",
      },
      colors: {
        "dark-green": "#002C15",
        argent: "#c1c1c1",
        "key-lime": "#E5FB97",
        "raisin-black": "#1E1E24",
        "anti-flash-white": "#EDEFF7",
        gainsboro: "#DEDEE0",
        "jungle-green": "#2A9D8F",
        "granite-gray": "#616161",
      },
      borderColor: {
        "dark-green": "#002C15",
        argent: "#c1c1c1",
        "key-lime": "#E5FB97",
        "raisin-black": "#1E1E24",
        "anti-flash-white": "#EDEFF7",
        gainsboro: "#DEDEE0",
      },
    },
  },
  plugins: [],
};
