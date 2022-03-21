import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Icon from "../components/Icon";

const Header = () => {
  return (
    <Flex
      sx={{
        margin: "20px 0",
        justifyContent: "space-between",
      }}
    >
      <Text
        sx={{
          fontSize: "2xl",
          fontWeight: "bold",
        }}
      >
        CSS Components
      </Text>

      <Tooltip label="Github Repository ⭐️">
        <Link passHref href="https://github.com/mehmetsagir/css-components.git">
          <a target="_blank">
            <IconButton aria-label="Github" icon={<Icon name="github" />} />
          </a>
        </Link>
      </Tooltip>
    </Flex>
  );
};

export default Header;
