import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import { Theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        colors: {
          dark: ["#121212", "#1d1e30", "#ccc", "#fff"],
        },
      }}
    >
      <Theme />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
