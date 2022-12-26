import React from "react";
import Slider from "react-slick";
import ServiceHeading from "./serviceHeading";
import TestiSlider1 from "../../../public/assets/images/TestiSlider1.webp";
import TestiSlider2 from "../../../public/assets/images/TestiSlider2.webp";
import TestiPerson from "../../../public/assets/images/slideperson1.webp";
import TestiPerson2 from "../../../public/assets/images/slideperson2.webp";
import NewPerson from "../../../public/assets/images/pkg1.png";
import newPerson1 from "../../../public/assets/images/Mask Group 16.png";
import newPerson2 from "../../../public/assets/images/Mask Group 84.png";
import Image from "next/image";
import Link from "next/link";

const SalonService = (props) => {
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
      <ServiceHeading />
      <div className="container service-new">
        <Slider {...settings}>
          <div className="testi-slider">
            <div className="slider-salon-bx">
              <div className="pkg-con">
                {/* <div className="pkg-img">
                  <img
                    src={props.pkgimg}
                    alt="package image"
                    height={"100%"}
                    width={"100%"}
                  />
                  <div className="pkg-nme">
                    <h1>{props.pkgnme}</h1>
                  </div>
                </div> */}
              </div>
              <div className="ul-txt-bx">
                <ul>
                  <li>
                    <h4>Normal Packages</h4>
                  </li>
                  <li>Lotus Cleanup</li>
                  <li>Full Arms (Chocolate Wax)</li>
                  <li>Full Legs (Chocolate Wax) </li>
                  <li>VLCC Detan Pedicure </li>
                  <li>Eyebrow Upper Lip</li>
                </ul>
                <div className="row-new">
                  <div className="pkg-pric">
                    <h1>
                      <span>₹ </span>1476.00
                    </h1>
                    <p>
                      <span>₹ 2000</span>
                    </p>
                  </div>
                  <div className="ban-btn1 pkg-btn">
                    <Link href={"/"} className="salon-sl-btn">
                      BOOK NOW{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={NewPerson}
              width={"100%"}
              height={"100%"}
              className={"testi-img testi-img1 new-pkg-img"}
            />
          </div>
          <div className="testi-slider">
            <div className="slider-salon-bx">
              <div className="pkg-con">
                {/* <div className="pkg-img">
                  <img
                    src={props.pkgimg}
                    alt="package image"
                    height={"100%"}
                    width={"100%"}
                  />
                  <div className="pkg-nme">
                    <h1>{props.pkgnme}</h1>
                  </div>
                </div> */}
              </div>
              <div className="ul-txt-bx">
                <ul>
                  <li>
                    <h4>Deluxe Packages</h4>
                  </li>
                  <li>Lotus Cleanup</li>
                  <li>Full Arms (Chocolate Wax)</li>
                  <li>Full Legs (Chocolate Wax) </li>
                  <li>VLCC Detan Pedicure </li>
                  <li>Eyebrow Upper Lip</li>
                </ul>
                <div className="row-new">
                  <div className="pkg-pric">
                    <h1>
                      <span>₹ </span>1476.00
                    </h1>
                    <p>
                      <span>₹ 2000</span>
                    </p>
                  </div>
                  <div className="ban-btn1 pkg-btn">
                    <Link href={"/"} className="salon-sl-btn">
                      BOOK NOW{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={newPerson2}
              width={"100%"}
              height={"100%"}
              className={"testi-img testi-img1"}
            />
          </div>
          <div className="testi-slider">
            <div className="slider-salon-bx">
              <div className="pkg-con">
                {/* <div className="pkg-img">
                  <img
                    src={props.pkgimg}
                    alt="package image"
                    height={"100%"}
                    width={"100%"}
                  />
                  <div className="pkg-nme">
                    <h1>{props.pkgnme}</h1>
                  </div>
                </div> */}
              </div>
              <div className="ul-txt-bx">
                <ul>
                  <li>
                    <h4>Bridal Packages</h4>
                  </li>
                  <li>Lotus Cleanup</li>
                  <li>Full Arms (Chocolate Wax)</li>
                  <li>Full Legs (Chocolate Wax) </li>
                  <li>VLCC Detan Pedicure </li>
                  <li>Eyebrow Upper Lip</li>
                </ul>
                <div className="row-new">
                  <div className="pkg-pric">
                    <h1>
                      <span>₹ </span>1476.00
                    </h1>
                    <p>
                      <span>₹ 2000</span>
                    </p>
                  </div>
                  <div className="ban-btn1 pkg-btn">
                    <Link href={"/"} className="salon-sl-btn">
                      BOOK NOW{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={newPerson1}
              width={"100%"}
              height={"100%"}
              className={"testi-img testi-img1"}
            />
          </div>
          <div className="testi-slider">
            <div className="slider-salon-bx">
              <div className="pkg-con">
                {/* <div className="pkg-img">
                  <img
                    src={props.pkgimg}
                    alt="package image"
                    height={"100%"}
                    width={"100%"}
                  />
                  <div className="pkg-nme">
                    <h1>{props.pkgnme}</h1>
                  </div>
                </div> */}
              </div>
              <div className="ul-txt-bx">
                <ul>
                  <li>
                    <h4>Normal Packages</h4>
                  </li>
                  <li>Lotus Cleanup</li>
                  <li>Full Arms (Chocolate Wax)</li>
                  <li>Full Legs (Chocolate Wax) </li>
                  <li>VLCC Detan Pedicure </li>
                  <li>Eyebrow Upper Lip</li>
                </ul>
                <div className="row-new">
                  <div className="pkg-pric">
                    <h1>
                      <span>₹ </span>1476.00
                    </h1>
                    <p>
                      <span>₹ 2000</span>
                    </p>
                  </div>
                  <div className="ban-btn1 pkg-btn">
                    <Link href={"/"} className="salon-sl-btn">
                      BOOK NOW{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={newPerson2}
              width={"100%"}
              height={"100%"}
              className={"testi-img testi-img1"}
            />
          </div>
        </Slider>
        <div className="down-sl-btn">
          <button>See All Packages</button>
        </div>
      </div>
    </>
  );
};

export default SalonService;
