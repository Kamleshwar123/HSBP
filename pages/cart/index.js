import Layout from "../../layout";
import Head from "next/head";
import Cart from "./cartpage";
export default function Form() {
  return (
    <>
      <Head>
        <title>Product cart</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <Cart />
      </Layout>
    </>
  );
}
