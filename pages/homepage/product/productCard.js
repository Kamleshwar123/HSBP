import React, { useState } from "react";
import Image from "next/image";
import StarRating from 'react-svg-star-rating'
const ProductCard = (props) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <>
            <div className="col-4">
                <div className="pro-card">
                    <div className="wishlist_home">
                        <i className="fa fa-heart"
                            onClick={handleClick}
                            style={{ color: active ? "#8b337b" : "#ddd" }}
                        ></i>
                        <div className="product">
                            <img
                                src={props.ProductImg}
                                alt={"appoint"}
                                width={"100%"}
                                height={"100%"}
                            />
                            <div className="product_disc">
                                <p className="prod_nme">King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard Oil with Plant Based Argan...King C. Gillette Men's Beard Oil with Plant Based Argan...</p>
                                <div className="d-flex align-items-center">
                                    <div className="col-6 text-start">
                                        <StarRating
                                            unit="half"
                                            isReadOnly
                                            initialRating={props.ProductRating} />
                                    </div>
                                    <div className="col-6 text-end">
                                        <p className="mt-0">{props.ProductRating}/5 <span>{props.ProductReview} Reviews</span></p>
                                    </div>
                                </div>
                                <div className="procut_price">
                                    <div className="col-6">
                                        <h2>₹377<span>₹599</span></h2>
                                    </div>
                                    <div className="col-6">
                                        <p>37% OFF</p>
                                    </div>
                                </div>
                                <p className="text-start">FREE DELIVERY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard