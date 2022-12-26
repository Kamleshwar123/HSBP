import React from "react";
import Link from "next/link";
import SalonImage from "../../../../public/assets/images/appoint-image.webp";
import Image from "next/image";
const BookAppointmentData = () => {
  return (
    <div className="container">
      <div className="bookappoint_home">
        <Image
          src={SalonImage}
          alt={"appoint"}
          width={"100%"}
          height={"100%"}
          className="img-appoint"
        />
        <div className="bookappoint_con">
          <h1>BOOK AN APPOINTMENT</h1>
          <p>We are happy to serve</p>
          <div className="home-appoint-btn">
            <p>Our services : +91-7835-011-011</p>
            <Link href={"/"} className="appoint-btn">
              Contact with us{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentData;
