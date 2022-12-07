import React, { useState } from "react";
//import Rating from "../../../public/assets/images/Polygon 1-1.svg";
//import Rating2 from "../../../public/assets/images/Polygon 1-4.svg";
import StarRating from "react-svg-star-rating";

export default function FeedbackPage() {
  const [rating1, setRating1] = useState(0);

  const handleOnClick1 = (rating, number) => {
    setRating1(rating);
  };
  return (
    <>
      <div className="container">
        <div className="feedback-banner">
          <p className="feed-heading">Salon Feedback</p>
          <p className="feed-text">
            If you need some information or wish to share your feedback or
            concern with us, kindly fill in the form.
          </p>
        </div>
        <div className="feed-sub-heading">
          <h3>Share Your Experience</h3>
          <p className="feed-text-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum sunt in culpa
          </p>
        </div>

        <form action="">
          <div className="feed-form">
            <div class="test-feed">
              <div class="field-container">
                <input
                  class="field-input"
                  id="inputid"
                  name="inputName"
                  type="text"
                  placeholder=" "
                />
                <label class="field-placeholder">First name</label>
              </div>
            </div>
            <div class="test-feed">
              <div class="field-container">
                <input
                  class="field-input"
                  id="inputid"
                  name="inputName"
                  type="text"
                  placeholder=" "
                />
                <label class="field-placeholder">E-mail ID</label>
              </div>
            </div>
            <div class="test-feed">
              <div class="field-container">
                <input
                  class="field-input"
                  id="inputid"
                  name="inputName"
                  type="text"
                  placeholder=" "
                />
                <label class="field-placeholder">Mobile No</label>
              </div>
            </div>
          </div>
        </form>
        <div className="feed-rating-box">
          <div className="feed-rate-number">
            <span>1</span>
          </div>
          <div className="feed-rating">
            <h4>Helpful</h4>
            <p className="rate-text-2">is our site helpful to you?</p>
          </div>
          <div className="feed-star">
            <p>AMBIENCE RATING</p>
            <StarRating handleOnClick={handleOnClick1} />
            {/* <div>rating: {rating1}</div> */}
          </div>
        </div>
        <div className="feed-rating-box">
          <div className="feed-rate-number">
            <span>2</span>
          </div>
          <div className="feed-rating">
            <h4>Ease of Use</h4>
            <p className="rate-text-2">How easy is it to use?</p>
          </div>
          <div className="feed-star-2">
            <p>AMBIENCE RATING</p>
            <StarRating handleOnClick={handleOnClick1} />
          </div>
        </div>
        <div className="feed-rating-box">
          <div className="feed-rate-number">
            <span>3</span>
          </div>
          <div className="feed-rating">
            <h4>Experience</h4>
            <p className="rate-text-3">
              How is your overall experience on our website?
            </p>
          </div>
          <div className="feed-star-3">
            <p>AMBIENCE RATING</p>
            <StarRating handleOnClick={handleOnClick1} />
          </div>
        </div>
        <div className="feed-rating-box">
          <div className="feed-rate-number">
            <span>4</span>
          </div>
          <div className="feed-rating">
            <h4>How would you rate the support you received ?</h4>
            <button className="feed-btn">Good I'm satisfied</button>
            <button className="feed-btn2">Bad I'm Unsatisfied</button>
          </div>
        </div>
        <section>
          <p className="feed-down-heading">Write Feedback</p>
          <textarea
            className="feed-textarea"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="feed-down-btn">Submit</button>
        </section>
      </div>
    </>
  );
}
