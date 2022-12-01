import React from "react";
import Image from "next/image";
import WowSerum from "../../../public/assets/images/wow serum.png";
import Rating from "../../../public/assets/images/Polygon 1-1.svg";
import Rating2 from "../../../public/assets/images/Polygon 1-4.svg";

export default function productdetails() {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Product Details</h1>
        </div>
        <div className="para">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna dolor sit
            eiusmod consectetur adipiscing tempor amet aliqua.
          </p>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="top-border">
              <Image className="wow-img" src={WowSerum} />
            </div>
          </div>
          <div className="box-right">
            <p className="box-heading">
              King C. Gillette Men's Beard Oil with Plant Based Argan…
            </p>
            <hr />
            <div className="rating">
              <Image src={Rating} />
              <Image src={Rating} />
              <Image src={Rating} />
              <Image src={Rating} />
              <Image src={Rating2} />
              <div className="rating-text">
                <p>4.5/5 216 Reviews</p>
              </div>
            </div>
            <div className="box-sub-heading">
              <p className="price-heading">Special Price</p>
              <div className="price">
                <p>
                  ₹ 377/- <span>₹ 500/</span>
                </p>
                <p>Size - 200 ML </p>
                <p>Quantity - 1</p>
                <button className="price-btn">Add to Cart</button>
                <button className="price-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="btn-box">
            <button className="price-btn2">Description</button>
            <button className="price-btn2">Review</button>
            <div className="para-2">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="rating-tex-2">
              <div className="circle">
                <p>A</p>
              </div>
              <div className="name">
                <p className="name-head">Annu</p>
                <div className="price-rating">
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating2} />
                </div>
                <p className="p-text">
                  I work as a hairstylist in the fashion industry. A lot of my
                  clients need to tweak their hairstyles, hair colour rather
                  frequently. The nature of work demands
                </p>
              </div>
            </div>
            <div className="rating-tex-2">
              <div className="circle-2">
                <p>A</p>
              </div>
              <div className="name">
                <p className="name-head">Pooja</p>
                <div className="price-rating">
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating2} />
                </div>
                <p className="p-text">
                  I work as a hairstylist in the fashion industry. A lot of my
                  clients need to tweak their hairstyles, hair colour rather
                  frequently. The nature of work demands
                </p>
              </div>
            </div>
            <div className="rating-tex-2">
              <div className="circle-3">
                <p>A</p>
              </div>
              <div className="name">
                <p className="name-head">Annu</p>
                <div className="price-rating">
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating} />
                  <Image src={Rating2} />
                </div>
                <p className="p-text">
                  I work as a hairstylist in the fashion industry. A lot of my
                  clients need to tweak their hairstyles, hair colour rather
                  frequently. The nature of work demands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
