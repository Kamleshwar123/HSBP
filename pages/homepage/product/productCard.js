import React, { useState } from "react";
const ProductCard = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <>
            <div className="col-4">
                <div className="card pro-card">
                    <div className="card-body">
                        <i className="fa fa-heart"
                            onClick={handleClick}
                            style={{ color: active ? "#8b337b" : "#ddd" }}
                        ></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard