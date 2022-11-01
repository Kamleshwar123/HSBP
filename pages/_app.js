import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import"../styles/style.css";
import"../styles/responsive.css"
import React from "react";
import App from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
    
        <Component {...pageProps} />
    </>
  );
}
export default MyApp;
