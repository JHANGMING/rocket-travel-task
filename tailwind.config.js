/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue"],
      serif: ["Times", "serif"],
    },
    container: {
      center: true,
      padding: "12px",
    },
    fontSize: {
      base: [
        "16px",
        {
          lineHeight: "22px",
        },
      ],
      "xl": [
        "20px",
        {
          lineHeight: "25px",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "33px",
        },
      ],
      "4xl": [
        "32px",
        {
          lineHeight: "43px",
        },
      ],
      "6xxl": [
        "64px",
        {
          lineHeight: "96px",
        },
      ],
    },
    spacing: {
      0.192: "-89px",
      0.4: "-20px",
      0.12: "-12px",
      0.1: "-1px",
      0: "0px",
      1: "4px",
      1.25:"5px",
      1.75: "8px",
      2: "10px",
      2.15: "12px",
      2.25: "12.5px",
      3: "15px",
      3.5: "16px",
      3.75: "18px",
      4: "20px",
      4.75: "24px",
      5: "25px",
      5.5:"22px",
      6: "30px",
      7: "35px",
      8: "32px",
      9: "45px",
      10: "40px",
      13:"52px",
      14: "56px",
      15:"60px",
      16: "80px",
      18: "90px",
      19: "95px",
      20:"80px",
      20.5:"100px",
      21: "105px",
      24: "120px",
    },
    extend: {
      colors: {
        travel: {
          first: "#F7F7F7",
          DEFAULT: "#00807E",
          second: "#818A91",
          third: "#00807E",
          forth:"#CED4DA",
          fifth:"#64C3BF",
          sixth:"#007572"
        },
      },
      fontFamily: {
        TC: ['"Noto Sans TC"', "sans-serif"],
        EN: ['"Roboto"', "sans-serif"],
      },
      spacing: {
        74: "296px",
      },
      boxShadow: {
        "2xl": "0px 0px 0px 1px #fff",
        "3xl": "0px 0px 0px 1px #3F5D45;",
      },
    },
    screens: {
      sm:"768px",
      md: "992px",

    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",

          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "1134px",
          },
        },
      });
    },
  ],
};
