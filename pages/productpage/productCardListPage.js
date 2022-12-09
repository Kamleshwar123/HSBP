import React from "react";
import ProductCardPage from "./productCardPage";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProductListPage() {
  const Cdata = [
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
    {
      ProductImg: "/assets/images/banner 2.webp",
      ProductName:
        "King C. Gillette Men's Beard Oil with Plant Based ArganKing C. Gillette Men's Beard",
      ProductRating: "4.5",
      ProductReview: "356",
    },
  ];
  return (
    <>
      {/* <div className="prod-cover-img"> */}
      {Cdata.map((val, i) => {
        return (
          <ProductCardPage
            key={i}
            ProductImg={val.ProductImg}
            ProductName={val.ProductName}
            ProductRating={val.ProductRating}
            ProductReview={val.ProductReview}
          />
        );
      })}
      <div className="porduct-more-page">
        <Link href={"/"} className="book-btn1 pkg-book-btn">
          View More
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      {/* </div> */}
    </>
  );
}
export default ProductListPage;
