import React from "react";
import FranchisesHeading from "./franchisesHead";
import FranchBann from "../../../public/assets/images/franch-bann.webp";
import Image from "next/image";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Franchises = () => {
  return (
    <div className="container">
      <FranchisesHeading />
      <div className="franch-ban">
        <Image
          className="franch-img-ban"
          src={FranchBann}
          height={"100%"}
          width={"100%"}
        />
        <div className="about-franch">
          <h1>
            EVERY THING <br></br>ABOUT FRANCHISING
          </h1>
          <p>Become our Franchise Partner and start your own business</p>
        </div>
        <div className="franch-cost">
          <h2>INVEST IN ALREADY PROFITABLE BUSINESS</h2>
          <p>
            *City, District, State level master Franchise * Low Investment (10
            Lacs - 15 Lacs) <br /> *High Returns (upto 50 Thousand Monthly)
          </p>
        </div>
        <div className="franch-more">
          <Link href={"/"} className="book-btn1 pkg-book-btn">
            Know More
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Franchises;
