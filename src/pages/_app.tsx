import Layout from "src/components/Layout";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
