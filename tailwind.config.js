/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito-Regular'],
        'nunito-black': ['Nunito-Black'],
        'nunito-black-italic': ['Nunito-BlackItalic'],
        'nunito-bold': ['Nunito-Bold'],
        'nunito-bold-italic': ['Nunito-BoldItalic'],
        'nunito-extrabold': ['Nunito-ExtraBold'],
        'nunito-extrabold-italic': ['Nunito-ExtraBoldItalic'],
        'nunito-extralight': ['Nunito-ExtraLight'],
        'nunito-extralight-italic': ['Nunito-ExtraLightItalic'],
        'nunito-italic': ['Nunito-Italic'],
        'nunito-light': ['Nunito-Light'],
        'nunito-light-italic': ['Nunito-LightItalic'],
        'nunito-medium': ['Nunito-Medium'],
        'nunito-medium-italic': ['Nunito-MediumItalic'],
        'nunito-semibold': ['Nunito-SemiBold'],
        'nunito-semibold-italic': ['Nunito-SemiBoldItalic'],
      },
    },
  },
  plugins: [],
}