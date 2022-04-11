import Layout from "src/components/Layout";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
