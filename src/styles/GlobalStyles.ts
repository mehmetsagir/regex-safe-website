import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },
  "*::selection": {
    color: "#fff",
    background: theme.colors.link,
  },
  body: {
    backgroundColor: theme.colors.primary,
    fontFamily:
      "--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: theme.colors.text,
  },
  button: {
    border: "none",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default GlobalStyle;
