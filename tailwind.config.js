const Color = require('color');
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();
// const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();

const colorPrimaryHex = '#dab84a';
const colorSecondaryHex = '#32d1c2';
const colorAccent1Hex = '#2fe54e';
const colorAccent2Hex = '#5c16fd';

module.exports = {
  important: 'html',
  purge: {
    content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    options: {
      // safelist: [''],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          '300': lighten(colorPrimaryHex, 0.2),
          '400': lighten(colorPrimaryHex, 0.1),
          '500': colorPrimaryHex,
          '600': darken(colorPrimaryHex, 0.1),
          '700': darken(colorPrimaryHex, 0.2),
        },
        secondary: {
          '500': colorSecondaryHex,
        },
        'accent-1': {
          '500': colorAccent1Hex,
          '600': darken(colorAccent1Hex, 0.1),
          '700': darken(colorAccent1Hex, 0.2),
        },
        'accent-2': {
          '500': colorAccent2Hex,
          '600': darken(colorAccent2Hex, 0.1),
          '700': darken(colorAccent2Hex, 0.2),
        },
      },
      screens: {
        tiny: '250px',
        mini: '350px',
        xs: '480px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
