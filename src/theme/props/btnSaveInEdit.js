import colors from '../base/colors';

import borders from '../base/borders';

const businessColor = colors.vidletColors.saveButton;

const btnSaveInEdit = {
  backgroundColor: businessColor,
  borderRadius: borders.borderRadius.section,
  color: colors.white.main,
  textTransform: 'capitalize',
  px: 1.8,
  '&:hover, &:focus,&:active, &:active:focus, &:active:hover': {
    backgroundColor: businessColor,
    color: colors.white.main,
  },
  mr: 1,
  div: { color: colors.white.main },
};
export default btnSaveInEdit;
