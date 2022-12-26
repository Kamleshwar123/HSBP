import Layout from "../../layout";
import Head from "next/head";
import BeautySlider from "./beautySlider";
import BeautyServicePage from "./beautyServicePage";
export default function BeautyService() {
  return (
    <>
      <Head>
        <title>Beauty Slider</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <BeautySlider />
        <BeautyServicePage />
      </Layout>
    </>
  );
}
