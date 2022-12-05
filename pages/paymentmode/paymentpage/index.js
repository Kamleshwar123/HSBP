import React from "react";
import Image from "next/image";
import apps from "../../../public/assets/icon/Group 2442.png";
import atm from "../../../public/assets/icon/world-debit-card_600x338.png";
import atm2 from "../../../public/assets/icon/png-clipart-credit-card-debit-card-mastercard-payment-card-credit-card-payment-internet-removebg-preview.png";

export default function paymentpage() {
  return (
    <>
      <div className="container">
        <div className="pay-box">
          <div className="pay-box-head">
            <p>More ways to pay</p>
          </div>
          <div className="pay-box-main">
            <input
              type="radio"
              className="radio-btn"
              name="fav_language"
              value="HTML"
            />
            <label className="radio-txt">Other UPI IDs/Net Banking</label>
            <br />
            <br />
            <div className="app-icons-1">
              <Image src={apps} />
            </div>
            <hr />
            <input
              type="radio"
              className="radio-btn"
              name="fav_language"
              value="HTML"
            />
            <label className="radio-txt">Add Debit / Credit / ATM Card</label>
            <br />
            <p className="txt">
              You can save your cards as per new RBI guidliness,
              <span className="span-color">Learn more</span>
            </p>
            <br></br>
            <div className="app-icons">
              <Image className="pay-1" src={atm} />
              <Image className="pay-2" src={atm2} />
            </div>
            <hr />
            <input
              type="radio"
              className="radio-btn"
              name="fav_language"
              value="HTML"
            />
            <label className="radio-txt">Pay On Service</label>
            <br />
            <p className="txt-2">
              To ensure social distancing, Pay on Service is not preferable
            </p>
            <br></br>

            <div className="pay-box-down">
              <p className="pay-box-title">Payment Details</p>
              <div className="pay-box-down-2">
                <p>MRP. Total</p>
                <span>₹ 754.00</span>
              </div>
              <hr />
              <div className="pay-box-down-2">
                <p>Product Discount </p>
                <span>₹ 50.00</span>
              </div>
              <hr />
              <div className="pay-box-down-2">
                <p>Total Amount </p>
                <span>₹ 704.00</span>
              </div>
            </div>
            <button className="pay-btn2">Submit</button>
            <div className="pay-address">
              <span>Delivery Address : </span>
              <p>RZ-95, Adarsh Nagar, Indirapuram, Ghaziabad - 201309</p>
              <span className="span-color">Edit</span>
              <button className="pay-btn1">Change / New Address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
