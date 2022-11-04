import React from "react";
import Link from "next/link";
const PackageList = (props) => {
    return (
        <>
         <div className="col-md-4 col-sm-1">
                <div className="pkg-bx">
                    <div className="pkg-con">
                        <div className="pkg-img">
                            <img src={props.pkgimg} alt="package image" height={"100%"} width={"100%"}/>
                            <div className="pkg-nme">
                                <h1>{props.pkgnme}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="pkg-l">
                        <ul>
                            <li>{props.servicenme1}</li>
                            <li>{props.servicenme2}</li>
                            <li>{props.servicenme3}</li>
                            <li>{props.servicenme4}</li>
                            <li>{props.servicenme5}</li>
                            <li>{props.servicenme6}</li>
                        </ul>
                        <div className="row">
                            <div className="col-6">
                                <div className='ban-btn1 pkg-btn'>
                                <Link href={'/'} className="book-btn1 pkg-book-btn">BOOK NOW </Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='pkg-pric'>
                                    <h1><span>₹ </span>1476.00</h1>
                                    <p><span>1600</span>(30% off)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default PackageList