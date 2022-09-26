// Base Styles
import colors from '../../base/colors';
import borders from '../../base/borders';

// Soft UI Dashboard PRO helper functions
import pxToRem from '../../functions/pxToRem';

const { inputColors, white } = colors;
const { borderWidth, borderRadius } = borders;

const input = {
  defaultProps: {
    disableUnderline: true,
    size: 'small',
    fullWidth: true,
  },
  styleOverrides: {
    root: {
      display: 'flex',
      padding: `${pxToRem(8)} ${pxToRem(8)} ${pxToRem(8)} ${pxToRem(8)}`,
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md}`,
      backgroundColor: `${white.main} !important`,

      '& fieldset': {
        border: 'none',
      },
    },
   
  },
};
export default input;
