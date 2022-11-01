import Sidebar from "./sidebar";
import ThemeProvider from "@mui/styles";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { Container } from '@mui/material'
const useStyles = makeStyles((ThemeProvider) => ({
    header: {
        background: 'red',
        color: 'black',
        height: '70px',
        background: '#fff',
        boxShadow: '2px -6px 20px 0 #b2a9a9',
        position: 'fixed',
        width: '100%',
    },
    headerSection: {
        height: '90px',
        position: 'relative',
    },
    headerContain: {
        height: '70px',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
    },
    cartImg: {
        // width: "65%",
        height: "auto",
      },
}
));
export default function Header() {
    const classes = useStyles(ThemeProvider);
    return (
        <>
            <section className={classes.headerSection}>
                <div className={classes.header}>
                    <Sidebar />
                    <Container className={classes.headerContain}>
                        <div className='home-logo'>
                            <Link href={'/'}>
                                <img
                                    src='/././assets/images/logo.webp'
                                    alt='HSBP Logo'
                                    width={'181'}
                                    height={'63'}
                                />
                            </Link>
                        </div>
                        <div className="right-header">
                            <img
                            src={'/././assets/images/cart.png'}
                            alt='HSBP Cart'
                            width={'34'}
                            height={'40'}
                            />
                        </div>
                    </Container>
                </div>
            </section>
        </>

    );

}

