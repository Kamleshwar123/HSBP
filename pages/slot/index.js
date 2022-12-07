import Layout from "../../layout";
import Head from "next/head";
import SlotBook from "./slotbook";

export default function Slot() {
  return (
    <>
      <Head>
        <title>Slot Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <SlotBook />
      </Layout>
    </>
  );
}
