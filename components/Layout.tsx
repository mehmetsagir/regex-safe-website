import { Box } from "@chakra-ui/react";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box maxWidth={800} margin="0 auto" px="20px">
      {children}
    </Box>
  );
};

export default Layout;
