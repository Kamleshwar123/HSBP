import Head from 'next/head'
import Layout from '../layout'
import HomePage from './homepage'
import About from './about'
export default function Home() {
  return (
    
      <>
      <Head>
      <title>Home Service Beauty Parlour</title>
      <meta name="description" content="Home service beauty Parlour" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
<Layout
   title="Best Beauty parlor service at home, beautician, makeup artist in Noida, Kolakta, Pune - HSBP"
   description="HSBP is one of the best beauty parlor service provide bridal makeup, facial, full body, leg, arm wax, hairdo, saree draping at home in Noida, Kolkata, Pune, Lucknow, Delhi"
>
<HomePage />
</Layout>
    </>
  
  )
}
