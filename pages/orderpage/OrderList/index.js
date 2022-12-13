import React from "react";
import Image from "next/image";
import Shampoo from "../../../public/assets/icon/shampoo.png";
import oil from "../../../public/assets/icon/oil.png";

const OrderList = () => {
  return (
    <>
      <div className="container">
        <div className="order-main-box">
          <div className="order-right-box">
            <p>Order Id : #HSBP021548485</p>
            <p>Order Place : 30/05/2022 10.19 am</p>
            <p> Items : 05</p>
            <p>Payment Mode : Online </p>
            <p>Total Amount : ₹ 1685/-</p>
            {/* <button className="orderpage-btn-1">Order Cancel</button>
            <button className="orderpage-btn-2">Download Invoice</button> */}
          </div>
          <div className="orderlist-left-box">
            {/* <h3>Order Summary Detail</h3> */}
            {/* <p className="p1">Rakesh Singh</p>
            <p className="p2"> Delivery Address:</p>
            <p className="p3">RZ-95, Adarsh Nagar, Indirapuram,</p>
            <p className="p4">Ghaziabad - 201309</p> */}
            <button className="orderpage-btn-1">Continue shopping</button>
            <p className="p5">Status : Processing</p>
            <p className="p6">Delivery Expected : 03/06/2022</p>
          </div>
        </div>
        <div className="order-details-list">
          <div className="od-radius">
            <table className="od-table">
              <th className="od-1">Product Details</th>
              <th className="od-2">Price</th>
              <th className="od-3">Quantity</th>
              <th className="od-4">Total</th>

              <tr className="od-tr">
                <td className="od-txt-1">
                  <Image className="od-img-1" src={Shampoo} />
                  <p>
                    King C. Gillette Men's Beard Oil with Plant Based Argan...
                  </p>
                </td>
                <td className="od-txt-2">
                  ₹ 377.00
                  <p className="od-txt-cut">₹ 500.00</p>
                </td>
                <td className="odlist-txt-3">
                  <div className="od-count">
                    <div className="od-bt-1">-</div>
                    <div className="od-bt-2">1</div>
                    <div className="od-bt-3">+</div>
                  </div>
                </td>
                <td className="od-txt-4">₹ 377.00</td>
              </tr>
              <tr className="od-tr">
                <td className="od-txt-1">
                  <Image className="od-img-1" src={oil} />
                  <p>
                    King C. Gillette Men's Beard Oil with Plant Based Argan...
                  </p>
                </td>
                <td className="od-txt-2">
                  ₹ 377.00
                  <p className="od-txt-cut">₹ 500.00</p>
                </td>
                <td className="odlist-txt-3">
                  <div className="od-count">
                    <div className="od-bt-1">-</div>
                    <div className="od-bt-2">1</div>
                    <div className="od-bt-3">+</div>
                  </div>
                </td>
                <td className="od-txt-4">₹ 377.00</td>
              </tr>
              <tr className="od-tr">
                <td className="od-txt-1">
                  <Image className="od-img-1" src={Shampoo} />
                  <p>
                    King C. Gillette Men's Beard Oil with Plant Based Argan...
                  </p>
                </td>
                <td className="od-txt-2">
                  ₹ 377.00
                  <p className="od-txt-cut">₹ 500.00</p>
                </td>
                <td className="odlist-txt-3">
                  <div className="od-count">
                    <div className="od-bt-1">-</div>
                    <div className="od-bt-2">1</div>
                    <div className="od-bt-3">+</div>
                  </div>
                </td>
                <td className="od-txt-4">₹ 377.00</td>
              </tr>
              <tr className="od-tr">
                <td className="od-txt-1">
                  <Image className="od-img-1" src={oil} />
                  <p>
                    King C. Gillette Men's Beard Oil with Plant Based Argan...
                  </p>
                </td>
                <td className="od-txt-2">
                  ₹ 377.00
                  <p className="od-txt-cut">₹ 500.00</p>
                </td>
                <td className="odlist-txt-3">
                  <div className="od-count">
                    <div className="od-bt-1">-</div>
                    <div className="od-bt-2">1</div>
                    <div className="od-bt-3">+</div>
                  </div>
                </td>
                <td className="od-txt-4">₹ 377.00</td>
              </tr>
              <tr className="od-tr-last">
                <td className="od-txt-1">
                  <Image className="od-img-1" src={Shampoo} />
                  <p>
                    King C. Gillette Men's Beard Oil with Plant Based Argan...
                  </p>
                </td>
                <td className="od-txt-2">
                  ₹ 377.00
                  <p className="od-txt-cut">₹ 500.00</p>
                </td>
                <td className="odlist-txt-3">
                  <div className="od-count">
                    <div className="od-bt-1">-</div>
                    <div className="od-bt-2">1</div>
                    <div className="od-bt-3">+</div>
                  </div>
                </td>
                <td className="od-txt-4">₹ 377.00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
