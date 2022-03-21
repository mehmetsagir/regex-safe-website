import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box maxWidth={800} margin="0 auto" px="20px">
      {children}
    </Box>
  );
};

export default Layout;
