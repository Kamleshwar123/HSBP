import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import TestimonialHeading from "./instituteHead";
import TestiSlider1 from "../../../public/assets/images/TestiSlider1.webp";
import TestiSlider2 from "../../../public/assets/images/TestiSlider2.webp";
import TestiPerson from "../../../public/assets/images/slideperson1.webp";
import TestiPerson2 from "../../../public/assets/images/slideperson2.webp";
import Image from "next/image";
const Testimonials = () => {
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
      <TestimonialHeading />
      <div className="container ">
        <div className="testi-bann">
          <Slider {...settings}>
            <div className="testi-slider">
              <div className="about-testi">
                <Image
                  src={TestiSlider1}
                  width={"100%"}
                  height={"100%"}
                  className={"test-bg"}
                />
                <div className="testi-cont">
                  <p className="testi-nme">Sonia Pandey</p>
                </div>
                <div className="test-content">
                  <i className="fas fa-quote-right"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore
                  </p>
                </div>
              </div>
              <Image
                src={TestiPerson}
                width={"100%"}
                height={"100%"}
                className={"testi-img testing-img1 new-testimonial-img"}
              />
            </div>
            <div className="testi-slider">
              <div className="about-testi">
                <Image
                  src={TestiSlider2}
                  width={"100%"}
                  height={"100%"}
                  className={"test-bg"}
                />
                <div className="testi-cont">
                  <p className="testi-nme">Sonia Pandey</p>
                </div>
                <div className="test-content">
                  <i className="fas fa-quote-right"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore
                  </p>
                </div>
              </div>
              <Image
                src={TestiPerson2}
                width={"100%"}
                height={"100%"}
                className={"testi-img testing-img2 "}
              />
            </div>
            <div className="testi-slider">
              <div className="about-testi">
                <Image
                  src={TestiSlider1}
                  width={"100%"}
                  height={"100%"}
                  className={"test-bg"}
                />
                <div className="testi-cont">
                  <p className="testi-nme">Sonia Pandey</p>
                </div>
                <div className="test-content">
                  <i className="fas fa-quote-right"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore
                  </p>
                </div>
              </div>
              <Image
                src={TestiPerson}
                width={"100%"}
                height={"100%"}
                className={"testi-img testing-img1 new-testimonial-img"}
              />
            </div>
            <div className="testi-slider">
              <div className="about-testi">
                <Image
                  src={TestiSlider2}
                  width={"100%"}
                  height={"100%"}
                  className={"test-bg"}
                />
                <div className="testi-cont">
                  <p className="testi-nme">Sonia Pandey</p>
                </div>
                <div className="test-content">
                  <i className="fas fa-quote-right"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore
                  </p>
                </div>
              </div>
              <Image
                src={TestiPerson2}
                width={"100%"}
                height={"100%"}
                className={"testi-img testing-img1 new-testimonial-img"}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
