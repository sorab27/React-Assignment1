import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="#about">About</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="#shop">Shop</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="#help">Help</Link>
          </li>
        </ul>
      </div>
      <div className="Copy">&copy; MobilePoint</div>
    </div>
  );
}

export default Footer;
