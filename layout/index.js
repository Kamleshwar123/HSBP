import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                
            </Head>
            <Header />
            <div className='main_page'>
            <main>{children}</main>
            <Footer />
            </div>  
        </>
    )
}