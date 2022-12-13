import React from "react";
import Image1 from "../../../public/assets/images/Group 2619.png";
import Image2 from "../../../public/assets/images/Group 2620.png";
import Image3 from "../../../public/assets/images/Group 2621.png";
import Image4 from "../../../public/assets/images/Group 2622.png";
import Image from "next/image";

export default function franchise() {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div>
          <div className="image1">
            <Image src={Image1} height={"100%"} width={"100%"} />
          </div>
          <br />
          <br />
          <div className="image2">
            <Image src={Image2} height={"100%"} width={"100%"} />
          </div>
          <br />
          <br />
          <div className="image3">
            <Image src={Image3} height={"100%"} width={"100%"} />
          </div>
          <br />
          <br />
          <div className="image4">
            <Image src={Image4} height={"100%"} width={"100%"} />
          </div>
          <br />
          <br />
          <div className="form">
            <div className="form-head">
              <p>Fill The Form Details</p>
            </div>

            <div className="form-box">
              <div className="loginForm">
                <div className="form-group-franchise">
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

                <div className="form-group-franchise">
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

                <div className="form-group-franchise">
                  <label for="fname">Email Address</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      className="form-control"
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

                <div className="form-group">
                  <label for="fname">Date</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="Enter Email Address"
                      name="Mobile"
                      type="date"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="fname">Time</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <input
                      //  type={show ? "text" : "password"}
                      className="form-control"
                      autoComplete="new-off"
                      placeholder="Enter Email Address"
                      name="Mobile"
                      type="time"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <div className="form-group-franchise">
                  <label for="fname">Write your own information</label>
                  <br />
                  <div className="input-group has_post_icon">
                    <textarea
                      //  type={show ? "text" : "password"}
                      className="form-control-franchise"
                      autoComplete="new-off"
                      placeholder="Enter your own information"
                      name="info"
                      onChange={handleChange}
                      // value={values?.Password || ""}
                    />
                  </div>
                </div>

                <button className="contact-btn1">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
