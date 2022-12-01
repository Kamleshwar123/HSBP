import React from "react";
import Image1 from "../../../public/assets/images/Group 4.png";
import Image2 from "../../../public/assets/images/Icon awesome-google-plus-square.svg";
import Image3 from "../../../public/assets/images/Icon awesome-pinterest-square.svg";
import Image4 from "../../../public/assets/images/Icon ionic-logo-youtube.svg";
import Image5 from "../../../public/assets/images/Icon simple-linkedin.svg";
import Image6 from "../../../public/assets/images/Image 19.png";
import Image7 from "../../../public/assets/images/care1.svg";
import Image8 from "../../../public/assets/images/care2.svg";
import Image9 from "../../../public/assets/images/care3.svg";
import Image10 from "../../../public/assets/images/care4.svg";
import Image11 from "../../../public/assets/images/contact us.png";
import Image from "next/image";

export default function customerCare() {
  return (
    <>
      <div className="container">
        <div className="cc-box">
          <div className="cc-box-body">
            <div className="cc-heading">
              <h5>DETAILS</h5>
            </div>

            <div className="cc-box-body-up">
              <p className="cc-sub-heading">
                <Image src={Image8} /> Customer Care
              </p>
            </div>
            <div className="cc-text">+91 958-257-7510, 9582-577-510</div>
            <div className="cc-text-2">Monday to Sunday 8.00 AM - 9.00 PM</div>
            <hr />
          </div>

          <div className="cc-box-body">
            <p className="cc-sub-heading">
              <Image className="care-img" src={Image9} padding-right="50px" />
              Email ID
            </p>
            <p className="cc-text">hsbpncr@gmail.com</p>
            <hr />
          </div>
          <div className="cc-box-body">
            <p className="cc-sub-heading">
              <Image className="care-img" src={Image10} />
              Social Media Pages
            </p>
            <div className="cc-image-box">
              <div className="cc-image-box-2">
                <div className="cc-image-1">
                  <Image src={Image1} />
                </div>
                <div className="cc-image-2">
                  <Image src={Image5} />
                </div>
                <div className="cc-image-2">
                  <Image src={Image2} />
                </div>
                <div className="cc-image-2">
                  <Image src={Image3} />
                </div>
                <div className="cc-image-4">
                  <Image src={Image4} />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="cc-box-body">
            <p className="cc-sub-heading">
              <Image className="cc-care-img" src={Image7} />
              Our Partners
            </p>

            <div className="cc-image-box-2">
              <div className="cc-image-1">
                <Image src={Image6} />
              </div>
            </div>
          </div>
        </div>
        <div className="cc-phone-img">
          <Image src={Image11} />
        </div>
      </div>
    </>
  );
}
