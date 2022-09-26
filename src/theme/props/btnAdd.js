import pxToRem from '../functions/pxToRem';
import colors from '../base/colors';
import borders from '../base/borders';

const businessColor = colors.vidletColors.addButton;

const btnAdd = {
  backgroundColor: businessColor,
  borderRadius: borders.borderRadius.section,
  paddingLeft: [pxToRem(8), pxToRem(8), pxToRem(8), pxToRem(16)],
  paddingRight: [pxToRem(8), pxToRem(8), pxToRem(8), pxToRem(16)],
  paddingTop: [pxToRem(8), pxToRem(8), pxToRem(8), pxToRem(12)],
  paddingBottom: [pxToRem(8), pxToRem(8), pxToRem(8), pxToRem(12)],

  color: colors.white.main,
  textTransform: 'capitalize',
  '&:hover, &:focus,&:active, &:active:focus, &:active:hover': {
    backgroundColor: businessColor,
  },
};
export default btnAdd;
