import Layout from "../../layout";
import Head from "next/head";
import AddressForm from "./addressForm";

export default function Form() {
  return (
    <>
      <Head>
        <title>Delivery Form</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <AddressForm />
      </Layout>
    </>
  );
}
