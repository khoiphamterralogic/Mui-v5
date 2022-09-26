import colors from '../base/colors';

import borders from '../base/borders';
const businessColor = colors.primary.main;

const btnFilterApply = {
  backgroundColor: businessColor,
  borderRadius: borders.borderRadius.section,

  color: colors.white.main,
  textTransform: 'capitalize',
  '&:hover, &:focus,&:active, &:active:focus, &:active:hover': {
    backgroundColor: businessColor,
  },
  div: { color: colors.white.main },
};
export default btnFilterApply;
