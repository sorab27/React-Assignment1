import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Review.css";

function Review(props) {
  let [date, setDate] = useState("");
  let today = new Date(),
    currentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  date = currentDate;

  return (
    <div className="container p-5">
      <div className="row">
        <h2 className="reviewTitle">Reviews</h2>
      </div>
      <div className="row">
        <div className="col-lg-12 p-0">
          {Object.keys(props.review).map((key, i) => {
            return (
              <div className="reviews">
                <div className="col-lg-3 col-md-12 col-12 p-0 d-flex">
                  <div>
                    <Avatar />
                  </div>
                  <div>
                    <div className="review">
                      <div className="reviewWriter">{key}</div>
                      <div>
                        <p className="reviewDate">
                          {(date) => setDate({ date: date })}
                          {date}
                        </p>
                      </div>
                      <div>
                        <p>{props.ratings}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 col-12 p-0 reviewRev">
                  <div className="reviewReview">{props.review[key]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
