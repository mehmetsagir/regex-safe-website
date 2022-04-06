import { lighten } from "polished";

const defaultColor = "#121212";

const theme = {
  colors: {
    bg: defaultColor,
    primary: lighten(0.03, defaultColor),
    secondary: lighten(0.1, defaultColor),
    textPrimary: lighten(0.7, defaultColor),
    textSecondary: lighten(0.4, defaultColor),
  },
};

export default theme;
