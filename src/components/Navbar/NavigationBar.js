import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

function NavigationBar() {
  return (
    <div className="Navbar">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinks">
            <Link to="/">Home</Link>
            <Link to="#link">About</Link>
            <Link to="#shop">Shop</Link>
            <Link to="#help">Help</Link>
            <Link to="/cart">
              <Button className="Button">
                <ShoppingCartIcon /> <span>Your Cart</span>
                <ProductConsumer>
                  {(value) => {
                    const { cart } = value;
                    if (cart.length > 0) {
                      return (
                        <span class="badge badge-pill badge-success">
                          {cart.length}
                        </span>
                      );
                    }
                  }}
                </ProductConsumer>
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
