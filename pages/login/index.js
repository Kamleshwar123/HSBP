import Layout from "../../layout";
import Head from "next/head";
import LoginPage from "./loginPage";
export default function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <LoginPage />
      </Layout>
    </>
  );
}
