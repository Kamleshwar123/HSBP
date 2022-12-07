import React from "react";
//import Image1 from "../../../public/assets/images/slot booking.webp";
import Image2 from "../../../public/assets/images/Best-Salon-Apps-for-Salon-Booking-Online_banner.webp";
import Image from "next/image";

const SlotBook = () => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="slot-heading">
          <p>Fill the Form Details</p>
        </div>
        <div className="slot-box">
          <div className="slotForm">
            <div className="slot-form-group">
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

            <div className="slot-form-group">
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

            <div className="slot-form-group">
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

            <div className="slot-form-group-1">
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

            <div className="slot-form-group-1">
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

            <div className="slot-form-group-1">
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

            <div className="slot-form-group-1">
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

            <button className="slot-btn1">Slot Book Now</button>
          </div>
        </div>
        <Image className="slot-Image" src={Image2} />
      </div>
    </>
  );
};

export default SlotBook;
