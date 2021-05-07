import React from "react";
import { NavLink } from "react-router-dom";
import "./CartNav.css";

function CartNav() {
  return (
    <div className="cartNav">
      <ol>
        <li>
          <NavLink to="/cart" className="disabled-link">
            Shopping Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="disabled-link">
            Shipping Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="disabled-link">
            Payment Options
          </NavLink>
        </li>
      </ol>
    </div>
  );
}

export default CartNav;
