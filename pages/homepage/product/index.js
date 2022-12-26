import React from "react";
import ProdHeading from "../product/productHead";
import ProductList from "./productCardList";
const Products = () => {
  return (
    <>
      <ProdHeading />
      <div className="container">
        <div className="prod-back-home">
          <div className="row">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
