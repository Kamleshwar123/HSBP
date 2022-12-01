import Layout from "../../layout";
import Head from "next/head";
import Customer from "./customer";

export default function customerForm() {
  return (
    <>
      <Head>
        <title>Customer Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <Customer />
      </Layout>
    </>
  );
}
