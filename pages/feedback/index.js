import Layout from "../../layout";
import Head from "next/head";
import FeedbackPage from "./feedbackpage";

export default function feedback() {
  return (
    <>
      <Head>
        <title>Feedback Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <FeedbackPage />
      </Layout>
    </>
  );
}
