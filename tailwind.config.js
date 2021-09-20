module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      binanceBG: '#1E2026',
      binanceButtonPrimary: '#F0B90B',
      binanceButtonSecondary: '#000000',
      binanceTextPrimary: '#E6E8EA',
      binanceTextSecondary: '#433303',
      bgcolor: '#1E2026',
    },
    // margin: {
    //   center: '10%',
    //   sm: '8px',
    //   md: '16px',
    //   lg: '24px',
    //   xl: '48px',
    //  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
