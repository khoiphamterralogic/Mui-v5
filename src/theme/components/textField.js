import pxToRem from "../functions/pxToRem";
import colors from "../base/colors";

const textField = {
  defaultProps: {
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
      sx: (theme) => ({
        top: -12,
        left: -12,
        ...theme.typography.h6,
        maxWidth: "unset",
        width: "133%",
      }),
    },
    FormHelperTextProps: {
      sx: {
        ml: 0,
      },
    },
    InputProps: {
      sx: {
        backgroundColor: colors.white.main,
      },
    },
  },
  styleOverrides: {
    root: {
      legend: { display: "none" },
      fieldset: { top: 0 },
      marginTop: pxToRem(20),
    },
  },
};

export default textField;
