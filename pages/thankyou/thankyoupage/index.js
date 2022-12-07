import React from "react";
import Image1 from "../../../public/assets/icon/ok.webp";
import Image2 from "../../../public/assets/icon/thankyou.png";
import Image from "next/image";

const ThankyouPage = () => {
  return (
    <>
      <div className="container">
        <div className="thankyou-box">
          <div className="thankyou-inner-box">
            <Image className="thankyou-image-1" src={Image1} />
            <br />
            <br />
            <Image className="thankyou-image-2" src={Image2} />
            <p className="thankyou-sub-heading">FOR APPOINTMENT</p>
            <p className="thankyou-down-text">
              Your appointment is almost confirmed. You will get beautician
              detail soon.
            </p>
            <button className="thankyou-btn">Back to home</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyouPage;
