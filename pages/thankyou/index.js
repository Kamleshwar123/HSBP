import Layout from "../../layout";
import Head from "next/head";
import ThankyouPage from "./thankyoupage";
export default function Thankyou() {
  return (
    <>
      <Head>
        <title>Thankyou Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <ThankyouPage />
      </Layout>
    </>
  );
}
