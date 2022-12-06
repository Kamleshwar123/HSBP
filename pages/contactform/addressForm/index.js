import React from "react";

const addressForm = () => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="">
          <div className="form-body">
            <div className="form-heading">
              <h3>Add Delivery Address</h3>
            </div>

            <div className="form">
              <div className="form-head">
                <p>Contact Details</p>
              </div>

              <div className="form-box">
                <div className="loginForm">
                  <div className="form-group">
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

                  <div className="form-group">
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

                  <div className="form-group">
                    <label>House No./ Building Name</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="House No./ Building Name"
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Street Name/ Area / Colony</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="Street Name/ Area / Colony"
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
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

                  <div className="form-group">
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

                  {/* <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="10 Digit Mobile No."
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      /> */}

                  <div className="form-group">
                    <label>Nearby Location</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="Enter Nearby Location (optional)"
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Pin Code</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="Enter Pin Code"
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      />
                    </div>
                  </div>

                  <button className="profile-detail-btn1">
                    Save Address & Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default addressForm;
