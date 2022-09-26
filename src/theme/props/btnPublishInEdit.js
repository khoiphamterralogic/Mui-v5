import colors from '../base/colors';

import borders from '../base/borders';

const businessColor = colors.vidletColors.publishButton;

const btnPublishInEdit = {
  backgroundColor: businessColor,
  borderRadius: borders.borderRadius.section,
  color: colors.white.main,
  px: 1.8,
  textTransform: 'capitalize',
  '&:hover, &:focus,&:active, &:active:focus, &:active:hover': {
    backgroundColor: businessColor,
    color: colors.white.main,
  },
  mr: 1,
  div: { color: colors.white.main },
};
export default btnPublishInEdit;
