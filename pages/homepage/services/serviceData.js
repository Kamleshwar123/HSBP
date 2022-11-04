import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const ServiceData = (props) => {
return(
    <div className="col-md-4 mb-5">
    <div className="service-bg">
  <div className="service-img">
  <div className="corner-borders corner-borders--left"></div>
  <img src={props.serviceimg} alt="service-1" height={'100%'} width={'100%'} />
  <div className="corner-borders corner-borders--right"></div>
  <h1>{props.servicenme}</h1>
  <p>{props.servicdisc}</p>
                    <Link href={"/"} className="book-btn1 pkg-book-btn">View More <FontAwesomeIcon icon={faArrowRight} /> </Link>
        </div>
    </div>
   </div>
)
}
export default ServiceData
