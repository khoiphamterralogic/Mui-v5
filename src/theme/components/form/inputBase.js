// Base Styles
import borders from "../../base/borders";
import colors from "../../base/colors";
import typography from "../../base/typography";

// helper functions
import pxToRem from "../../functions/pxToRem";

const { dark, grey, white } = colors;
const { size, fontWeightRegular } = typography;

const inputBase = {
  styleOverrides: {
    root: {
      // display: 'grid !important',
      placeItems: "center !important",
      width: "100%",
      height: "auto",
      padding: `${pxToRem(8)} ${pxToRem(12)}`,
      fontSize: `${size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: "1.4 !important",
      color: `${grey[700]} !important`,
      backgroundClip: "padding-box !important",
      appearance: "none !important",
      borderRadius: borders.borderRadius.sm,
      transition:
        "box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important",
      backgroundColor: white.main,
    },

    input: {
      width: "100% !important",
      padding: "0 !important",

      "&::-webkit-input-placeholder": {
        color: `${dark.main} !important`,
      },
    },
  },
};
export default inputBase;
