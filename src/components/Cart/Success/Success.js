import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ProductConsumer } from "../../../context";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import "./Success.css";
import EmptyCart from "../EmptyCart/EmptyCart";

function Success() {
  const history = useHistory();
  return (
    <div className="success">
      <ProductConsumer>
        {(value) => {
          const {
            cart,
            cartTotal,
            cartTax,
            coupon,
            delivery,
            firstName,
            lastName,
            address,
            address2,
            country,
            city,
            zipCode,
            phoneNumber,
            variant,
          } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <div className="successHead">
                  <h1>
                    your order has been placed. <DoneAllIcon />
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, tempora!
                  </p>
                  <Link to="/">
                    <button
                      className="btn"
                      onClick={() => {
                        value.clearCart();
                        history.push("/");
                      }}
                    >
                      continue shopping
                    </button>
                  </Link>
                </div>
                <div className="successTable">
                  <h3 className="text-center">Order Summary</h3>
                  <div className="successSummary">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Payment Mode</th>
                          </tr>
                        </thead>

                        {cart.map((product) => {
                          return (
                            <tbody>
                              <tr>
                                <td>
                                  <img
                                    src={product.img}
                                    alt=""
                                    className="successImg"
                                  />
                                </td>
                                <td>
                                  {product.title} ({variant})
                                </td>
                                <td>{product.price}</td>
                                <td>{product.count}</td>
                                <td>
                                  {firstName} {lastName}, {address} {address2},{" "}
                                  {country}, {city}, {zipCode}, {phoneNumber}
                                </td>
                                <td>Credit Card / Debit Card</td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                  <div className="successGrandTotal">
                    <h5>Tax: ${cartTax.toFixed(2)}</h5>
                    <h5>Discount: - ${coupon.toFixed(2)}</h5>
                    <h5>Shipping Fee: ${delivery}</h5>
                    <h5>
                      Grand Total: $
                      {(
                        cartTotal.toFixed(2) -
                        coupon.toFixed(2) +
                        delivery
                      ).toFixed(2)}
                    </h5>
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
    </div>
  );
}

export default Success;
