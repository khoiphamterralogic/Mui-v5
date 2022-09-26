import pxToRem from '../functions/pxToRem';
import colors from '../base/colors';

import btnAdd from './btnAdd';
import btnSaveInEdit from './btnSaveInEdit';
import btnDuplicateInEdit from './btnDuplicateInEdit';
import btnPublishInEdit from './btnPublishInEdit';
import btnDeleteInEdit from './btnDeleteInEdit';
import btnFilterApply from './btnFilterApply';
import btnSegment from './btnSegment';
import btnDefault from './btnDefault';

import btnReviewVideo from './btnReviewVideo';
import btnCommonAllowDisable from './btnCommonAllowDisable';

const { grey } = colors;

const props = {
  cssScrollbarHeight: {
    scrollbarWidth: 'thin',
    scrollbarColor: grey[300],

    '&::-webkit-scrollbar': {
      height: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: pxToRem(10),
      backgroundColor: grey[300],
    },
  },
  cssScrollbarWidth: {
    scrollbarWidth: 'thin',
    scrollbarColor: grey[300],
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: pxToRem(10),
      backgroundColor: grey[300],
    },
  },
  // btnIconEdit,
  btnAdd, //New Update Aug 15,20222
  btnSaveInEdit, //New Update Aug 15,20222
  btnDuplicateInEdit, //New Update Aug 15,20222
  btnPublishInEdit, //New Update Aug 15,20222
  btnDeleteInEdit, //New Update Aug 15,20222
  btnSegment, //New Aug 30 2022
  btnDefault, //New Aug 30 2022

  btnReviewVideo, //New Update Aug 15,20222
  btnCommonAllowDisable, //New Update Aug 15,20222
  btnFilterApply, //New Update Aug 15,20222
};

export default props;
