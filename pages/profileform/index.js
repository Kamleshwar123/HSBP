import Layout from "../../layout";
import Head from "next/head";
import Profiledetails from "./profiledetails";

export default function ProfileForm() {
  return (
    <>
      <Head>
        <title>Profile Form</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <Profiledetails />
      </Layout>
    </>
  );
}
