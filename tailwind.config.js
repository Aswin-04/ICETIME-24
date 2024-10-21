import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        openSans : ["var(--font-open-sans)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ["var(--font-sora)", ...fontFamily.sans],

      },

      colors: {
        'light-blue': 'rgb(241, 246, 254)',
        'tx': {
          DEFAULT: '#0a0f11',
          50: '#090e10',
          100: '#131c20',
          200: '#263940',
          300: '#395560',
          400: '#4b7181',
          500: '#5e8ea1',
          600: '#7ea4b4',
          700: '#9fbbc6',
          800: '#bfd2d9',
          900: '#dfe8ec',
          950: '#eff4f6',
        },
        'bgd': {
          DEFAULT: '#f5f9fa',
          50: '#090f11',
          100: '#111f22',
          200: '#223d44',
          300: '#335c66',
          400: '#447a88',
          500: '#5599aa',
          600: '#77adbb',
          700: '#99c2cc',
          800: '#bbd6dd',
          900: '#ddebee',
          950: '#eef5f6',
        },
        'primary': {
          DEFAULT: '#51a9c7',
          50: '#061013',
          100: '#0c2027',
          200: '#19404d',
          300: '#256074',
          400: '#32809a',
          500: '#3ea0c1',
          600: '#65b3cd',
          700: '#8bc6da',
          800: '#b2d9e6',
          900: '#d8ecf3',
          950: '#ecf6f9',
        },
        'secondary': {
          DEFAULT: '#9cadd0',
          50: '#080b11',
          100: '#101623',
          200: '#212d45',
          300: '#314368',
          400: '#415a8b',
          500: '#5270ad',
          600: '#748dbe',
          700: '#97a9ce',
          800: '#bac6de',
          900: '#dce2ef',
          950: '#eef1f7',
        },
        'accent': {
          DEFAULT: '#62bcda',
          50: '#051115',
          100: '#0a2129',
          200: '#134353',
          300: '#1d647c',
          400: '#2786a5',
          500: '#30a7cf',
          600: '#5ab9d8',
          700: '#83cae2',
          800: '#acdcec',
          900: '#d6edf5',
          950: '#eaf6fa',
        },
       },

      screens: {
        "xxs": "375px",
        "xs": "425px",
        'wide': '1440px'
      }
       
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}