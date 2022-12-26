import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
function ProductList() {
  const Cdata = [
    {
      ProductImg: "/assets/images/product1.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/product1.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/product1.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/product1.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/product1.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/product1.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
  ];
  return (
    <>
      {Cdata.map((val, i) => {
        return (
          <ProductCard
            key={i}
            ProductImg={val.ProductImg}
            ProductName={val.ProductName}
            ProductRating={val.ProductRating}
            ProductReview={val.ProductReview}
          />
        );
      })}
      <div className="porduct-more">
        <Link href={"/"} className=" pkg-book-btn-new">
          See All Products
          {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </Link>
      </div>
    </>
  );
}
export default ProductList;
