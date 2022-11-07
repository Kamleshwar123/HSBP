import React from "react"
import ProdHeading from "../product/productHead"
import ProductCard from "./productCard"
const Products = () =>{
    return(
        <>
      <ProdHeading />
      <div className="container">`
      <div className="row">
      <ProductCard />
      </div>
      </div>
   
        </>
    )
}
export default Products