import React from "react";
import "./EmptyCart.css";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

function EmptyCart() {
  return (
    <div className="emptyCart">
      <div className="emptyCartIcon">
        <SentimentVeryDissatisfiedIcon />
      </div>
      <div className="emptyCartInfo">
        <p>your cart is empty!</p>
      </div>
    </div>
  );
}

export default EmptyCart;
