import Layout from "../../layout";
import Head from "next/head";
import OrderDetailsPage from "./OrderDetailsPage";
export default function OrderDetails() {
  return (
    <>
      <Head>
        <title>Order Detail Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <OrderDetailsPage />
      </Layout>
    </>
  );
}
