import colors from '../base/colors';

import borders from '../base/borders';

const btnDuplicateInEdit = {
  backgroundColor: colors.vidletColors.duplicateButton,
  borderRadius: borders.borderRadius.section,
  color: colors.white.main,
  textTransform: 'capitalize',
  px: 1.8,
  '&:hover, &:focus,&:active, &:active:focus, &:active:hover': {
    backgroundColor: colors.vidletColors.duplicateButton,
    color: colors.white.main,
  },
  mr: 1,
  div: { color: colors.white.main },
};
export default btnDuplicateInEdit;
