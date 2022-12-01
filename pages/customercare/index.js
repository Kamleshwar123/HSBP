import Layout from "../../layout";
import Head from "next/head";
import CustomerCare from "./customerCarePage";

export default function customerCareForm() {
  return (
    <>
      <Head>
        <title>Customer Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <CustomerCare />
      </Layout>
    </>
  );
}
