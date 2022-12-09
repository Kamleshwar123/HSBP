import React from "react";
import crossIcon from "../../../public/assets/icon/cross.png";
import Image from "next/image";
const CheckoutPage = () => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="checkout-background-color">
          <div className="checkout-top-heading">
            <p>Awesome, No Extra Doorstep Charges!</p>
          </div>
          <div className="display-flex">
            <div className="checkout-box">
              <div className="checkout-heading">
                <p>Fill the Form Details</p>
              </div>
              <div className="checkoutForm">
                <div className="checkout-form-group">
                  <label>Name</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="Enter Name"
                      name="Mobile"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="checkout-form-group">
                  <label>Mobile Number</label>
                  <br />
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="10 Digit Mobile No."
                      name="Name"
                      onChange={handleChange}
                      // value={values?.Email || ""}
                    />
                  </div>
                </div>

                <div className="checkout-form-group">
                  <label>Email Address</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="Enter Email Address"
                      name="Email"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="checkout-form-group-1">
                  <label>State</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <select className="form-control" name="cars">
                      <option>---Select--State--</option>
                      <option value="volvo">Jharkhand</option>
                      <option value="saab">Delhi</option>
                      <option value="fiat">Gujrat</option>
                      <option value="audi">West Bengal</option>
                    </select>
                  </div>
                </div>

                <div className="checkout-form-group-1">
                  <label>City</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <select className="form-control" name="city">
                      <option>---Select--City--</option>
                      <option value="volvo">Jharkhand</option>
                      <option value="saab">Delhi</option>
                      <option value="fiat">Gujrat</option>
                      <option value="audi">West Bengal</option>
                    </select>
                  </div>
                </div>

                <div className="checkout-form-group-1">
                  <label>Date</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      type="date"
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="DD-MM-YYYY"
                      name="Mobile"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="checkout-form-group-1">
                  <label>Time</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      type="time"
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="HH/MM"
                      name="Mobile"
                      onChange={handleChange}
                      //value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="last-info-field">
                  <label>Write your own information</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <textarea
                      //  type={show ? "text" : "password"}
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="Enter your own information"
                      name="Mobile"
                      onChange={handleChange}
                      //value={values?.Password || ""}
                    />
                  </div>
                </div>
                {/* <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="10 Digit Mobile No."
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      /> */}

                <button className="checkout-btn1">Check Out</button>
              </div>
            </div>
            {/****Service package page form */}
            <div className="checkout-box-2">
              <div className="checkout-heading">
                <p>
                  Service/Package Name <span>Price(INR)</span>
                </p>
              </div>
              <div className="checkout-row-hr">
                <div className="checkout-row">
                  <div className="checkout-cross-icon">
                    <Image src={crossIcon} className="crossIcon" />
                  </div>
                  <div className="ch-1">
                    <p className="ch-p-1">Normal Package</p>
                    <p className="ch-p-2">60 mins.</p>
                  </div>
                  <div className="mh-1">
                    <p className="mh-p-1">₹ 1476</p>
                    <p className="mh-p-2">
                      <span>2952</span> (50% off)
                    </p>
                  </div>
                  <div className="checkout-count">
                    <div className="bt-1">-</div>
                    <div className="bt-2">1</div>
                    <div className="bt-3">+</div>
                  </div>
                </div>
                <hr className="ch-hr" />
              </div>
              <div className="checkout-row-hr">
                <div className="checkout-row">
                  <div className="checkout-cross-icon">
                    <Image src={crossIcon} />
                  </div>
                  <div className="ch-1">
                    <p className="ch-p-1">Normal Package</p>
                    <p className="ch-p-2">60 mins.</p>
                  </div>
                  <div className="mh-1">
                    <p className="mh-p-1">₹ 1476</p>
                    <p className="mh-p-2">
                      <span>2952</span> (50% off)
                    </p>
                  </div>
                  <div className="checkout-count">
                    <div className="bt-1">-</div>
                    <div className="bt-2">1</div>
                    <div className="bt-3">+</div>
                  </div>
                </div>
                <hr className="ch-hr" />
              </div>
              <div className="checkout-row-hr">
                <div className="checkout-row">
                  <div className="checkout-cross-icon">
                    <Image src={crossIcon} />
                  </div>
                  <div className="ch-1">
                    <p className="ch-p-1">Normal Package</p>
                    <p className="ch-p-2">60 mins.</p>
                  </div>
                  <div className="mh-1">
                    <p className="mh-p-1">₹ 1476</p>
                    <p className="mh-p-2">
                      <span>2952</span> (50% off)
                    </p>
                  </div>
                  <div className="checkout-count">
                    <div className="bt-1">-</div>
                    <div className="bt-2">1</div>
                    <div className="bt-3">+</div>
                  </div>
                </div>
              </div>
              {/******----------- */}
              <div className="ch-down-text">
                <div className="checkbox-ch">
                  <input type="checkbox" />
                  <p>Have a Discount Coupon?</p>
                </div>
                <div className="ch-left-text">
                  <p className="ch-left-text1">Coupon Code</p>
                  <input
                    type="text"
                    placeholder="Enter Coupon Here"
                    className="ch-input-field-dotted"
                  />
                  <br />
                  <button className="ch-btn-down">APPLY</button>
                </div>
              </div>
              <div className="ch-last-box">
                <div className="ch-last-text-1">
                  <p>Subtotal </p>
                  <p>Product Discount</p>
                  <p>Other Charges</p>
                  <p> TOTAL</p>
                </div>
                <div className="ch-last-price">
                  <p>4200.00 </p>
                  <p>200.00</p>
                  <p>00.00</p>
                  <p>4200.00</p>
                </div>
              </div>
              <button className="ch-lest-btn">Process to Pay</button>
            </div>
            {/****End service package form */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
