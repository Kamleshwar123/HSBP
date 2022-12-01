import Layout from "../../layout";
import Head from "next/head";
import Paymentpage from "./paymentpage";
export default function Paymentmode() {
  return (
    <>
      <Head>
        <title>Payment mode</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <Paymentpage />
      </Layout>
    </>
  );
}
