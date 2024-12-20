/** @type {import('tailwindcss').Config} */

const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};






//import daisyui from "daisyui";

//export default {
 // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //theme: {
   // extend: {},
  //},
  //plugins: [daisyui],
//};



//export default {
 // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //theme: {
 //   extend: {},
 // },
//  plugins: [require("daisyui")],
//};  

