import React from "react"
import ProdHeading from "../product/productHead"
import ProductList from "./productCardList"
const Products = () => {
    return (
        <>
            <ProdHeading />
            <div className="container">
                <div className="row">
                    <ProductList />
                </div>
            </div>

        </>
    )
}
export default Products