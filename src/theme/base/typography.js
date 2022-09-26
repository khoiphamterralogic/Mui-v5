//  Base Styles
import colors from './colors';

//  Helper Functions
import pxToRem from '../functions/pxToRem';

const { dark } = colors;

const baseProperties = {
  fontFamily:
    '"Gotham Book Regular", "Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10),
  fontSizeXS: pxToRem(11),
  fontSizeSM: pxToRem(13),
  fontSizeRegular: pxToRem(14),
  fontSizeLG: pxToRem(16),
  fontSizeXL: pxToRem(18),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium,
};

const baseColor = {
  color: dark.main,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
    ...baseColor,
  },

  h2: {
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties,
    ...baseColor,
  },

  h3: {
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    ...baseColor,
  },

  h4: {
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    ...baseColor,
  },

  h5: {
    fontSize: pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties,
    ...baseColor,
  },

  h6: {
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties,
    ...baseColor,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
    ...baseColor,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeRegular,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6,
    ...baseColor,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
    ...baseColor,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeRegular,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
    ...baseColor,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: 1.5,
    textTransform: 'uppercase',
    ...baseColor,
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25,
    ...baseColor,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    regular: baseProperties.fontSizeRegular,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
  },

  lineHeight: {
    sm: 1.25,
    regular: 1.5,
    lg: 2,
  },
};

export default typography;
