import Sidebar from "./sidebar";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <Sidebar />
        <div className='container'>
          <div className='header-nav'>
            <div className='header-nav-left'>
              <div className='logo'>
                <Link href={'/'}>
                  <img src={'assets/images/logo.webp'} alt="logo" height={'100%'} width={'100%'} />
                </Link>
              </div>
            </div>
            <div className='header-nav-right'>
              <div className='cart-icon'>
                <img src={'assets/images/cart.webp'} alt="cart" height={'100%'} width={'100%'} />
              </div>
              <div className='app-icon'>
                <p>DOWNLOAD APP</p>
                <Link href={'/'}>
                  <img src={'assets/images/app-s.webp'} alt="app" height={'100%'} width={'100%'} />
                </Link>
                <Link href={'/'}>
                  <img src={'assets/images/g-app.webp'} alt="app" height={'100%'} width={'100%'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>

  );

}

