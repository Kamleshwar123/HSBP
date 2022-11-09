import React from 'react'
import InstituteHeading from './instituteHead'
import InstiBann from '../../../public/assets/images/institute-ban.webp'
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Institute = () => {
  return (
    <div className="container">
    <InstituteHeading />
    <div className="franch-ban">
        <Image
        src={InstiBann}
        height={"100%"}
        width={"100%"}
        />
        <div className="about-insti">
            <p>A long and strong</p>
            <h1>Career awaits you</h1>
            <div className="about-ins">
            <p>Join dream wellness institute & become a</p>
            <h1>Beauty Care Expert</h1>
            <p>Advanced Certificate Courses</p>
        </div>
        <div className="insti-more">
                <Link href={'/'} className="book-btn1 pkg-book-btn">Know More<FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Institute