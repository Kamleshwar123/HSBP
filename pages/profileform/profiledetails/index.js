import React from "react";

const profileForm = () => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="">
          <div className="form-body-1">
            <div className="p-form-heading">
              <h3>My Profile</h3>
            </div>
            <div className="form-1">
              <div className="form-head">
                <p>Contact Details</p>
              </div>

              <div className="form-box">
                <div className="loginForm">
                  <div className="form-group">
                    <label for="fname">Name</label>
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
                    <label for="fname">Last Name</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="Enter Last Name"
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="fname">Mobile Number</label>
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
                    <label for="fname">Gender</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <select className="form-control" name="cars">
                        <option>-Select--Gender-</option>
                        <option value="volvo">Male</option>
                        <option value="saab">Female</option>
                        <option value="fiat">Others</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="fname">Date of Birth</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="dd-mm-yyyy-"
                        name="Mobile"
                        onChange={handleChange}
                        // value={values?.Password || ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="fname">Age</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <select className="form-control" name="cars">
                        <option>-Select-Age-</option>
                        <option value="volvo">18</option>
                        <option value="saab">19</option>
                        <option value="fiat">20</option>
                        <option value="audi">21</option>
                        <option value="audi">22</option>
                        <option value="audi">23</option>
                        <option value="audi">24</option>
                        <option value="audi">25</option>
                        <option value="audi">26</option>
                        <option value="audi">27</option>
                        <option value="audi">28</option>
                        <option value="audi">29</option>
                        <option value="audi">30</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="fname">Email Address</label>
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

                  <div className="form-group">
                    <label for="fname">Pin Code</label>
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

                  <div className="form-group-1">
                    <label for="fname">Permanent Address</label>
                    <br />
                    <div className="input-group has_post_icon">
                      <input
                        //  type={show ? "text" : "password"}
                        className="form-control"
                        autoComplete="new-off"
                        placeholder="Enter Permanent Address"
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
                    <label for="fname">City</label>
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

                  <button className="profile-btn1">
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

export default profileForm;
