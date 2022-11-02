import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                
            </Head>
            <Header />
            <div>
            <main>{children}</main>
            {/* <Footer /> */}
            </div>  
        </>
    )
}