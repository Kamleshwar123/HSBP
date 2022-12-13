import Layout from "../../layout";
import Head from "next/head";
import OrderList from "./OrderList";
export default function OrderPage() {
  return (
    <>
      <Head>
        <title>Payment mode</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <OrderList />
      </Layout>
    </>
  );
}
