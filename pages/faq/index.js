import Layout from "../../layout";
import Head from "next/head";
import FaqPage from "./faqpage";
export default function Faq() {
  return (
    <>
      <Head>
        <title>Faq</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <FaqPage />
      </Layout>
    </>
  );
}
