import { lighten } from "polished";
const defaultColor = "#121212";
const theme = {
  colors: {
    bg: defaultColor,
    primary: lighten(0.03, defaultColor),
    secondary: lighten(0.1, defaultColor),
    text: lighten(0.7, defaultColor),
    textSecondary: lighten(0.4, defaultColor),
    success: "#28a745",
    link: "#00aaff",
  },
};

export default theme;
