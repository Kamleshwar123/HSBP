import Head from "next/head";
import Header from "./header";

export default function Layout({children}) {
    return(
    <>
    <Head>
    <title>Best Beauty parlor service at home, beautician, makeup artist in Noida, Kolakta, Pune - HSBP</title>
<meta name="description" content="HSBP is one of the best beauty parlor service provide bridal makeup, facial, full body, leg, arm wax, hairdo, saree draping at home in Noida, Kolkata, Pune, Lucknow, Delhi"/>
<meta name="keywords" content="Bridal makeup, ladies salon service in Noida, Delhi, Gurgaon, makeup artist, facial, waxing, spa, online, hair care, manicure, pedicure, salon services at home, hair stylist, home service beauty parlour"/>

<meta property="og:type" content="website" />
<meta property="og:title" content="Best Beauty parlor service at home, beautician, makeup artist in Noida, Kolakta, Pune" />
<meta property="og:description" content="HSBP is best home beauty parlor services for woman’s provide bridal makeup, facial, full body, leg, arm wax, hairdo, saree draping at home in Noida, Kolkata, Pune, Lucknow, Delhi" />
<meta property="og:url" content="https://homeservicebeautyparlour.com" />
<meta property="og:site_name" content="Home Service Beauty Parlour - HSBP" />
    </Head>
    <Header />
    <main>{children}</main>
    {/* <Footer /> */}
    </>
    )
}