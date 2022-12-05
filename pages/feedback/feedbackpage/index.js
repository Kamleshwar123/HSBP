import React from "react";

export default function FeedbackPage() {
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
          <h1>Share Your Experience</h1>
          <p className="feed-text-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum sunt in culpa
          </p>
        </div>
        <div className="feed-form">
          <form action="">
            <legend className="feed-legend">Name</legend>
            <input className="feed-input" id="feed-name" type="text" />
            <legend className="feed-legend" id="feed-email">
              E-mail ID
            </legend>
            <input
              className="feed-input-2"
              type="text"
              placeholder="E-mail ID"
            />
            <legend className="feed-legend">Mobile No.</legend>
            <input
              className="feed-input"
              type="text"
              placeholder="Mobile No."
            />
          </form>
        </div>
      </div>
    </>
  );
}
