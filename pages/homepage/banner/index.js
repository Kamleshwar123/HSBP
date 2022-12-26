import Slider from "react-slick";
import Link from "next/link";

export default function BannerSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="home-banner-img">
        <img
          src={"assets/images/banner_1.webp"}
          alt="banner-1"
          height={"100%"}
          width={"100%"}
          className="d-none d-sm-block"
        />
        <img
          src={"assets/images/banner_1_mob.webp"}
          alt="banner-1"
          height={"100%"}
          width={"100%"}
          className="d-block d-sm-none"
        />
        <div className="bann-con d-none d-sm-block">
          <h1>Now Serving at your Home</h1>
          <h2>BEAUTICIANS/HAIRDRESSERS</h2>
          <div className="ban-btn1">
            <Link href={"/"} className="book-btn1">
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="home-banner-img">
        <img
          src={"assets/images/banner_2_mob.webp"}
          alt="banner-2"
          height={"100%"}
          width={"100%"}
          className="d-block d-sm-none"
        />
        <img
          src={"assets/images/banner_2.webp"}
          alt="banner-2"
          height={"100%"}
          width={"100%"}
          className="d-none d-sm-block"
        />
        <div className="bann-con d-none d-sm-block">
          <div className="ban-btn1">
            <Link href={"/"} className="book-btn1">
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="home-banner-img">
        <img
          src={"assets/images/banner_3_mob.webp"}
          alt="banner-3"
          height={"100%"}
          width={"100%"}
          className="d-block d-sm-none"
        />
        <img
          src={"assets/images/banner_3.webp"}
          alt="banner-3"
          height={"100%"}
          width={"100%"}
          className="d-none d-sm-block"
        />
      </div>
      <div className="home-banner-img">
        <Link href={"/"}>
          <img
            src={"assets/images/banner_4_mob.webp"}
            alt="banner-1"
            height={"100%"}
            width={"100%"}
            className="d-block d-sm-none"
          />
          <img
            src={"assets/images/banner_4.webp"}
            alt="banner-1"
            height={"100%"}
            width={"100%"}
            className="d-none d-sm-block"
          />
        </Link>
      </div>
    </Slider>
  );
}
