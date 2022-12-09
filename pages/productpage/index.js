import Layout from "../../layout";
import Head from "next/head";
import ProductListPage from "./productCardListPage";
import ProductHeading from "./productHeadPage";

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Home service beauty Parlour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="helllo dldsfsdfdskl" description="hello about">
        <ProductHeading />
        <div className="container prod-page">
          <div className="row">
            <ProductListPage />
          </div>
        </div>
      </Layout>
    </>
  );
}

// import React from "react";
// import ProductListPage from "./productCardListPage";
// import ProductHeading from "./productHeadPage";
// const ProductsPage = () => {
//   return (
//     <>
//       <ProductHeading />
//       <div className="container">
//         <div className="row">
//           <ProductListPage />
//         </div>
//       </div>
//     </>
//   );
// };
// export default ProductsPage;
