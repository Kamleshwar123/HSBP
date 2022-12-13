import React from "react";
import crossIcon from "../../../public/assets/icon/cross.png";
import LoginIcon from "../../../public/assets/icon/Layer_x0020_1.png";
import Image from "next/image";

const LoginPage = () => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="login-background-color">
          <div className="display-flex">
            <div className="login-box">
              <div className="login-heading">
                <div className="img-box">
                  <Image src={LoginIcon} />
                </div>
                <p>Login</p>
              </div>
              <div className="loginForm">
                <div className="login-form-group">
                  <label className="mobile-txt">Enter your mobile number</label>
                  <br />
                  <div className="mobile-number-input-box">
                    <input
                      //  type={show ? "text" : "password"}
                      className="mobile-number-input"
                      autoComplete="new-off"
                      placeholder="Enter Mobile Number"
                      name="Mobile"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                  <button className="login-button">SIGN IN</button>
                </div>

                <div className="login-form-group-down">
                  <div className="otptext-label">
                    <label>Enter OTP</label>
                  </div>
                  <br />
                  <div className="input-group-new">
                    <input
                      type="number"
                      className="form-control-otp"
                      autoComplete="new-off"
                      name="Name"
                      // onChange={handleChange}
                      // value={values?.Email || ""}
                    />
                    <input
                      type="number"
                      className="form-control-otp"
                      autoComplete="new-off"
                      name="Name"
                      // onChange={handleChange}
                      // value={values?.Email || ""}
                    />
                    <input
                      type="number"
                      className="form-control-otp"
                      autoComplete="new-off"
                      name="Name"
                      // onChange={handleChange}
                      // value={values?.Email || ""}
                    />
                    <input
                      type="number"
                      className="form-control-otp"
                      autoComplete="new-off"
                      name="Name"
                      // onChange={handleChange}
                      // value={values?.Email || ""}
                    />
                    <div className="resend-otp">
                      <p>Did not receive OTP? Resend OTP in </p>
                    </div>
                    <button className="opt-small-btn">Resend OTP</button>
                  </div>
                </div>

                <button className="login-btn1">Verify OTP</button>
                <div className="otp-down-txt">
                  <p>
                    By continuing you confirm that you agree to the terms of use
                    and confirm that you have read the privacy policy
                  </p>
                </div>
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
                  <p className="ch-bold-text"> TOTAL</p>
                </div>
                <div className="ch-last-price">
                  <p>4200.00 </p>
                  <p>200.00</p>
                  <p>00.00</p>
                  <p className="ch-bold-text">4200.00</p>
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

export default LoginPage;
