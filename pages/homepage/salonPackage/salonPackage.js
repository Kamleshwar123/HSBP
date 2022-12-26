import React from "react";
import Slider from "react-slick";
import PackageHeading from "./packageHeading";
import TestiSlider1 from "../../../public/assets/images/TestiSlider1.webp";
import TestiSlider2 from "../../../public/assets/images/TestiSlider2.webp";
import TestiPerson from "../../../public/assets/images/slideperson1.webp";
import TestiPerson2 from "../../../public/assets/images/slideperson2.webp";
import NewPerson from "../../../public/assets/images/pkg1.png";
import newPerson1 from "../../../public/assets/images/Mask Group 16.png";
import newPerson2 from "../../../public/assets/images/Mask Group 84.png";
import Image from "next/image";
import newimg from "../../../public/assets/images/makeup.webp";
import newimg2 from "../../../public/assets/images/service-1.webp";
import newimg3 from "../../../public/assets/images/service-2.webp";
import newimg4 from "../../../public/assets/images/service-3.webp";
import newimg5 from "../../../public/assets/images/mehandi-art.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SalonPackage = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "50px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <PackageHeading />
      <div className="container service-new service-bg-new1">
        <Slider {...settings}>
          <div className="col-md-4 mb-5">
            <div className="service-bg">
              <div className="service-img">
                <div className="corner-borders corner-borders--left">
                  <Image
                    src={newimg}
                    alt="service-1"
                    height={"100%"}
                    width={"100%"}
                    className="pk-sl-img"
                  />
                </div>
                <div className="corner-borders corner-borders--right"></div>
                <h1>Body Care</h1>
                <p>We provide special offers for students and corporates</p>
                <Link href={"/"} className="book-btn1 pkg-book-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="service-bg">
              <div className="service-img">
                <div className="corner-borders corner-borders--left">
                  <Image
                    src={newimg3}
                    alt="service-1"
                    height={"100%"}
                    width={"100%"}
                    className="pk-sl-img"
                  />
                </div>
                <div className="corner-borders corner-borders--right"></div>
                <h1>Skin Care</h1>
                <p>Pamper Your Skin and Unleash a Beautiful You !</p>
                <Link href={"/"} className="book-btn1 pkg-book-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="service-bg">
              <div className="service-img">
                <div className="corner-borders corner-borders--left">
                  <Image
                    src={newimg4}
                    alt="service-1"
                    height={"100%"}
                    width={"100%"}
                    className="pk-sl-img"
                  />
                </div>
                <div className="corner-borders corner-borders--right"></div>
                <h1>Hair Care</h1>
                <p>
                  From Couture Cut revitalising Treatment we've got it all !
                </p>
                <Link href={"/"} className="book-btn1 pkg-book-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="service-bg">
              <div className="service-img">
                <div className="corner-borders corner-borders--left">
                  <Image
                    src={newimg5}
                    alt="service-1"
                    height={"100%"}
                    width={"100%"}
                    className="pk-sl-img"
                  />
                </div>
                <div className="corner-borders corner-borders--right"> </div>
                <h1>Mehndi Art </h1>

                <p>We provide special offers for students and corporates</p>
                <Link href={"/"} className="book-btn1 pkg-book-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Slider>
        <div className="down-sl-btn">
          <button>See All Packages</button>
        </div>
      </div>
    </>
  );
};

export default SalonPackage;
