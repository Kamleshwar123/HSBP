import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    const footer_page_menu = [
        {
            to: '/',
            name: 'About Us'
        },
        {
            to: '/',
            name: 'Nearby Salons'
        },
        {
            to: '/',
            name: 'Franchises'
        },
        {
            to: '/',
            name: 'Salon at Home'
        },
        {
            to: '/',
            name: 'Beauty Services'
        },
        {
            to: '/',
            name: 'Products'
        },
        {
            to: '/',
            name: 'Institutes'
        },
        {
            to: '/',
            name: 'Contact us'
        },
        {
            to: '/',
            name: 'Blog'
        },

    ];
    const footer_page_menu_sec = [

        {
            to: '/',
            name: 'Appointment Query'
        },
        {
            to: '/',
            name: 'I am a Beautician'
        },
        {
            to: '/',
            name: 'Site Map'
        },
        {
            to: '/',
            name: 'Apps Download'
        },
        {
            to: '/',
            name: 'Awards'
        },
        {
            to: '/',
            name: 'News, Events & Media'
        },
        {
            to: '/',
            name: 'Buy Subscription'
        },
        {
            to: '/',
            name: ' Clients Speak'
        },
    ];

    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <Link href={'/'}>
                                <img src={'assets/images/logo.webp'} alt="logo" height={'100%'} width={'100%'} />
                            </Link>
                            <p>India’s 1st Smart Salon serving you quality services and branded products both, at Salons & at Home, 24x7 through our user friendly app & website.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-page-list">
                            <ul>
                                {
                                    footer_page_menu.map
                                        (footer_page_menu => (<li key="{2}"><Link className='fotter-menu' href={footer_page_menu.to}>{footer_page_menu.name}</Link></li>))
                                }

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-page-list">
                            <ul>
                                {
                                    footer_page_menu_sec.map
                                        (footer_page_menu_sec => (<li key="{1}"><Link className='fotter-menu' href={footer_page_menu_sec.to}>{footer_page_menu_sec.name}</Link></li>))
                                }

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="foter-support">
                            <h1>Customer Support</h1>
                            <div>
                                <Link href={"tel:9582577510"}>+91 958 257 7510</Link>
                            </div>
                            <div>
                                <Link href={"mailto:hsbpncr@gmail.com"}>hsbpncr@gmail.com</Link>
                            </div>
                        </div>
                        <div className="footer-social">
                            <h1>Follow us</h1>
                            <ul>
                                <Link href={"/"}>
                                    <li><i className="fa-brands fa-facebook-f"></i></li>
                                </Link>
                                <Link href={"/"}>
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                </Link>
                                <Link href={"/"}>
                                    <li><i className="fa-brands fa-twitter"></i></li>
                                </Link>
                                <Link href={"/"}>
                                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        </section>
    )
}

export default Footer