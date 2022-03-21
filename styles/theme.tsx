import { Global } from "@mantine/core";

export function Theme() {
  return (
    <Global
      styles={(theme) => ({
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },

        body: {
          backgroundColor: theme.colors.dark[0],
          color: theme.colors.dark[3],
        },
      })}
    />
  );
}
