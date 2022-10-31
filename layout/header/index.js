import Sidebar from "./sidebar";
import Link from "next/link";
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material'
const useStyles = makeStyles(() => ({
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
    img: {
        width: "65%",
        height: "auto",
      },
}
));
export default function Header() {
    const classes = useStyles();
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
                                    className={classes.img}
                                />
                            </Link>
                        </div>
                        <div className="right-header">
                            <img
                            src={'/././assets/images/cart.png'}
                            alt='HSBP Cart'
                            className={classes.img}
                            width={'100%'}
                            height={'100%'}
                            />
                        </div>
                    </Container>
                </div>
            </section>
        </>

    );

}

