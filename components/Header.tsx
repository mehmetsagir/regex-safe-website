import { ActionIcon, Box, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

import Icon from "../components/Icon";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px 0",
      }}
    >
      <Text
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        CSS Components
      </Text>

      <Link passHref href="https://github.com/mehmetsagir/css-components.git">
        <a target="_blank">
          <ActionIcon
            variant="filled"
            size={36}
            color="gray"
            sx={{
              padding: 6,
            }}
          >
            <Icon name="github" />
          </ActionIcon>
        </a>
      </Link>
    </Box>
  );
};

export default Header;
