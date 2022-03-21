import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

const color = {
  bgColor: "#121212",
  primary: "#1a1a1a",
  text: "#c4c4c4",
};

const theme = extendTheme({ color, config });

export default theme;
