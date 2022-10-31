import Head from "next/head";
import Header from "./header";

export default function Layout({children}) {
    return(
    <>
    <Head>
        <title>
            Home Service Beauty Parlour
        </title>
    </Head>
    <Header />
    <main>{children}</main>
    {/* <Footer /> */}
    </>
    )
}