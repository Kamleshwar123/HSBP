import React from "react";

export default function Cart() {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="cart-box">
          <div className="cart-heading">
            <h3>Awesome, No Extra Doorstep Charges!</h3>
          </div>
          <div className="form">
            <div className="form-head">
              <p>Fill The Form Details</p>
            </div>

            <div className="form-box">
              <div className="loginForm">
                <div className="form-group-cart">
                  <label for="fname">Name</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      className="form-control-cart"
                      autoComplete="new-off"
                      placeholder="Enter Name"
                      name="Mobile"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="form-group-cart">
                  <label for="fname">Mobile Number</label>
                  <br />
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control-cart"
                      autoComplete="new-off"
                      placeholder="10 Digit Mobile No."
                      name="Name"
                      onChange={handleChange}
                      // value={values?.Email || ""}
                    />
                  </div>
                </div>

                <div className="form-group-cart">
                  <label for="fname">Email Address</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      className="form-control-cart"
                      autoComplete="new-off"
                      placeholder="Enter Email Address"
                      name="Mobile"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="fname">State</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <select className="form-control-cart" name="cars">
                      <option>---Select--State--</option>
                      <option value="volvo">Jharkhand</option>
                      <option value="saab">Delhi</option>
                      <option value="fiat">Gujrat</option>
                      <option value="audi">West Bengal</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label for="fname">City</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <select className="form-control-cart" name="city">
                      <option>---Select--City--</option>
                      <option value="volvo">Jharkhand</option>
                      <option value="saab">Delhi</option>
                      <option value="fiat">Gujrat</option>
                      <option value="audi">West Bengal</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label for="fname">Date</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <select className="form-control-cart" name="city">
                      <option>mm-dd-yyyy</option>
                      <option value="volvo">Jharkhand</option>
                      <option value="saab">Delhi</option>
                      <option value="fiat">Gujrat</option>
                      <option value="audi">West Bengal</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label for="fname">Time</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <select className="form-control-cart" name="city">
                      <option>hh/mm/ss</option>
                      <option value="volvo">Jharkhand</option>
                      <option value="saab">Delhi</option>
                      <option value="fiat">Gujrat</option>
                      <option value="audi">West Bengal</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="cname">Check your payment mode</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="field-checkbox"
                        value="Initial value"
                      />
                      <label className="checkbox-label">Online Payment</label>
                      <br />
                      <input
                        type="checkbox"
                        name="field-checkbox"
                        value="Initial value"
                      />
                      <label className="checkbox-label">
                        Cash (Cash after service)
                      </label>
                    </div>
                  </div>
                </div>

                <button className="contact-btn1">Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
