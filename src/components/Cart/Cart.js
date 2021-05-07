import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import EmptyCart from "../Cart/EmptyCart/EmptyCart";
import "./Cart.css";
import CartNav from "./CartNav/CartNav";
import DeleteIcon from "@material-ui/icons/Delete";

function Cart() {
  return (
    <ProductConsumer>
      {(value) => {
        let {
          cart,
          cartSubtotal,
          cartTotal,
          cartTax,
          coupon,
          delivery,
          variant,
        } = value;
        if (cart.length > 0) {
          return (
            <React.Fragment>
              <CartNav />
              <div className="cart">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <React.Fragment>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h3>shopping cart</h3>
                        </div>
                        <div>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              value.clearCart();
                            }}
                          >
                            <DeleteIcon /> Clear Cart
                          </button>
                        </div>
                      </div>
                      {cart.map((product) => {
                        return (
                          <div className="cartProduct">
                            <div className="cartProductImg">
                              <Link to="/details">
                                <img src={product.img} alt="" />
                              </Link>
                            </div>
                            <div className="cartProductInfo">
                              <Link to="/details">
                                <p>
                                  {product.title} ({variant})
                                </p>
                                <p>{product.info.substr(0, 20)}</p>
                                <p>$ {product.price}</p>
                              </Link>
                            </div>
                            <div>
                              <select
                                className="cartSelect"
                                value={variant}
                                onChange={(e) => {
                                  value.variantHandler(e.target.value);
                                }}
                              >
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Gold">Gold</option>
                                <option value="Gray">Gray</option>
                              </select>
                            </div>
                            <div className="cartProductQuantity">
                              <div className="d-flex justify-content-center">
                                <div>
                                  <span
                                    className=" btn btn-black mx-1"
                                    onClick={() => value.decrement(product.id)}
                                  >
                                    <b>-</b>
                                  </span>
                                  <span className="btn btn-black mx-1">
                                    {product.count}
                                  </span>
                                  <span
                                    className=" btn btn-black mx-1"
                                    onClick={() => value.increment(product.id)}
                                  >
                                    <b>+</b>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="cartBtn">
                        <div>
                          <Link to="/">
                            <button className="btn cartBtnCancel">
                              Cancel
                            </button>
                          </Link>
                        </div>
                        <div>
                          <Link to="/ship">
                            <button className="btn cartBtnNext">Next</button>
                          </Link>
                        </div>
                      </div>
                    </React.Fragment>
                  </div>
                  <div className="col-lg-4 col-md-12 summarySide">
                    <React.Fragment>
                      <h3>summary</h3>
                      <div className="cartSummary">
                        <div className="cartCoupon">
                          <form>
                            <input
                              placeholder="enter coupon code"
                              onChange={(e) => {
                                value.usingCoupon(e.target.value);
                              }}
                            />
                          </form>
                        </div>
                        <div className="cartSubtotalComplete">
                          <div className="cartSubtotal">
                            <div>
                              <p>subtotal</p>
                            </div>
                            <div>$ {cartSubtotal}</div>
                          </div>
                          <div className="cartSubtotal">
                            <div>
                              <p>shipping</p>
                            </div>
                            <div>
                              <span>{delivery}</span>
                            </div>
                          </div>
                          <div className="cartSubtotal">
                            <div>
                              <p>taxes</p>
                            </div>
                            <div>$ {cartTax}</div>
                          </div>
                          <div className="cartSubtotal">
                            <div>
                              <p>discount</p>
                            </div>
                            <div> - $ {coupon.toFixed(2)}</div>
                          </div>
                        </div>
                        <div className="cartTotal">
                          <div>
                            <span>total</span>
                          </div>
                          <div>
                            <span>
                              ${" "}
                              {(
                                cartTotal.toFixed(2) -
                                coupon.toFixed(2) +
                                delivery
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <EmptyCart />
            </React.Fragment>
          );
        }
      }}
    </ProductConsumer>
  );
}

export default Cart;
