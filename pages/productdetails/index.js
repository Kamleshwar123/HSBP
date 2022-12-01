import Layout from "../../layout";
import Head from "next/head";
import ProductDetails from "./productdetailspage";
export default function Productdetail() {
  return (
    <>
      <Head>
        <title>Product Deatil</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <ProductDetails />
      </Layout>
    </>
  );
}
