import Layout from "../../layout";
import Head from "next/head";
import CheckoutPage from "./checkoutPage";
export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <CheckoutPage />
      </Layout>
    </>
  );
}
