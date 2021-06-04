module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      softblue: "#259ed9",
    }),
    fontSize: {
      "15pt": "0.9375rem",
      "16pt": "1rem",
      "20pt": "1.25rem",
      "25pt": "1.5625rem",
      "40pt": "2.5rem",
    },
    fontFamily: {},
    extend: {
      lineHeight: {
        "62pt": "3.875rem",
        "30pt": "1.875rem",
        "20pt": "1.25rem",
      },
      borderRadius: {
        "10pt": "0.625rem",
        "12pt": "0.75rem",
        "15pt": "0.9375rem",
      },
      height: {
        "18p75": "4.6875rem",
      },
      zIndex: {
        n10: "-10",
        n5: "-5",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
