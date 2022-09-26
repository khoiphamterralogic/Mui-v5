// @mui material components
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    // keys: ["xs","sm","md","lg","xl"]
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});
export default theme;

window.theme = theme;

console.log("theme", theme);
