module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    safelist: ['bg-blue-200', 'text-blue-500', 'bg-green-200', 'text-green-500']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Sora'],
      body: ['Sora'],
      sans: ['Sora'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
