import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "src/components/Layout";
import Loader from "src/components/Loader";

function MyApp({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, [router.pathname]);

  return (
    <Layout>
      <Head>
        <title>Regex Safe</title>
      </Head>
      {loading && <Loader />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
