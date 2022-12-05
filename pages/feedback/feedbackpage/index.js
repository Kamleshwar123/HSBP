import React from "react";

export default function feedbackPage() {
  return (
    <>
      <div className="contanier">
        <div className="feedback-banner">
          <p>Salon Feedback</p>
          <p>
            If you need some information or wish to share your feedback or
            concern with us, kindly fill in the form.
          </p>
        </div>
        <div className="feed-sub-heading">
          <p>Share Your Experience</p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum sunt in culpa
          </p>
        </div>
        <div className="feed-form">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail ID" />
            <input type="text" placeholder="Mobile No." />
          </form>
        </div>
      </div>
    </>
  );
}
