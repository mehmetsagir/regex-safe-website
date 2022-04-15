import Head from "next/head";
import Layout from "src/components/Layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Head>
        <title>Regex Safe</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
