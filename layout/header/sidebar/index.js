import React from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
 
  showSettings (event) {
    event.preventDefault();

  }
  render () {
    return (
      <Menu>
        <Link href={'/'} id='home'className='menu-item'>Home</Link>
       <Link href={'/about'} id='about' className='menu-item'>About</Link>
      </Menu>
    );
  }
}
export default Sidebar