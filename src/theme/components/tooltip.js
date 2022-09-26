// @mui material components
import Fade from '@mui/material/Fade';

// base styles
import colors from '../base/colors';
import typography from '../base/typography';
import borders from '../base/borders';

// helper functions
import pxToRem from '../functions/pxToRem';

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: 'center',
      borderRadius: borderRadius.sm,
      opacity: 0.7,
      padding: pxToRem(4),
    },

    arrow: {
      color: black.main,
    },
  },
};

export default tooltip;
