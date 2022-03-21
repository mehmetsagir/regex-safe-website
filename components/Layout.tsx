import { Box } from "@mantine/core";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
