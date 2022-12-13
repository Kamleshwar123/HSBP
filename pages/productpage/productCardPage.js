import React, { useState } from "react";
import Image from "next/image";
import StarRating from "react-svg-star-rating";
import Wallet from "../../public/assets/icon/Icon awesome-wallet (1).svg";

const ProductCardPage = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  // const [rating1, setRating1] = useState(0);

  // const handleOnClick1 = (rating, number) => {
  //   setRating1(rating);
  // };

  return (
    <>
      <div className="col-md-4 col-sm-12">
        <div className="prod-page-banner"></div>
        <div className="pro-card-page-new">
          <div className="wishlist_home-page">
            <i
              className="fa fa-heart"
              onClick={handleClick}
              style={{ color: active ? "#8b337b" : "#ddd" }}
            ></i>
            <div className="product-page">
              <img
                src={props.ProductImg}
                alt={"appoint"}
                width={"100%"}
                height={"100%"}
              />
              <div className="product_disc-page">
                <p className="prod_nme-page">
                  King C. Gillette Men's Beard Oil with Plant Based ArganKing C.
                  Gillette Men's Beard Oil with Plant Based Argan...King C.
                  Gillette Men's Beard Oil with Plant Based Argan...
                </p>
                <div className="d-flex align-items-center">
                  <div className="col-6 text-start">
                    <StarRating
                      unit="half"
                      initialRating={props.ProductRating}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <p className="mt-0">
                      {/* <div>rating: {rating1}/5</div> */}
                      {props.ProductRating}/5{" "}
                      <span>{props.ProductReview} Reviews</span>
                    </p>
                  </div>
                </div>
                <div className="procut_price-page">
                  <div className="col-6-page">
                    <div className="wallet-icon">
                      <Image src={Wallet} />
                    </div>
                    <div className="prod-page-price">
                      <h2>
                        ₹377<span>₹599</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-6-new">
                    <p>37% OFF</p>
                  </div>
                </div>
                <p className="text-start">FREE DELIVERY</p>
                <button className="prod-page-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardPage;
