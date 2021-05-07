import React, { useState } from "react";
import "./Payment.css";
import CartNav from "../CartNav/CartNav";
import { Link, useHistory } from "react-router-dom";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Summary from "../Summary/Summary";
import { ProductConsumer } from "../../../context";
import EmptyCart from "../EmptyCart/EmptyCart";

function Shipping() {
  const [errorMessage, setErrorMessage] = useState("");
  const [dateError, setDateError] = useState("");
  const history = useHistory();

  const validateCreditCard = (value) => {
    if (value.length === 16) {
      setErrorMessage("");
    } else {
      setErrorMessage("Enter valid credit card number");
    }
  };

  const validateExpiry = (input) => {
    if (input.length === 2) {
      input += "/";
    }
    if (input.length === 5) {
      setDateError("");
    } else {
      setDateError("Enter valid expiry date");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (errorMessage === "" || dateError === "") {
      history.push("/success");
    } else {
      history.push("/error");
    }
  };

  return (
    <ProductConsumer>
      {(value) => {
        let { cart } = value;
        if (cart.length > 0) {
          return (
            <React.Fragment>
              <div className="payment">
                <CartNav />
                <div className="pay">
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <h3>payment method</h3>
                      <form onSubmit={submitHandler} className="payForm">
                        <div className="form-row payRadioDiv">
                          <div className="form-group col-md-12 payCredit mt-2">
                            <div>
                              <input
                                type="radio"
                                id="free"
                                name="shipping"
                                value="Free"
                                checked
                              />
                            </div>

                            <div>
                              <p>credit card / debit card</p>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Cum, quos.
                              </p>
                              <div className="payCreditForm">
                                <div className="form-row">
                                  <div className="col-md-6 mb-3">
                                    <div className="input-group">
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="0000 0000 0000 0000"
                                        aria-describedby="inputGroupPrepend"
                                        onChange={(e) =>
                                          validateCreditCard(e.target.value)
                                        }
                                        required
                                      />
                                      <div className="input-group-prepend">
                                        <span
                                          className="input-group-text"
                                          id="inputGroupPrepend"
                                        >
                                          <CreditCardIcon />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 mb-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="MM/YY"
                                      maxLength="5"
                                      onChange={(e) =>
                                        validateExpiry(e.target.value)
                                      }
                                      required
                                    />
                                  </div>
                                  <div className="col-md-3 mb-3">
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="CVV"
                                      maxLength="3"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="col-md-12 mb-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      maxLength="15"
                                      placeholder="Card Holder Name"
                                      required
                                    />
                                  </div>
                                </div>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    color: "red",
                                  }}
                                >
                                  {errorMessage} {dateError}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-12 payPaypal">
                            <div>
                              <input
                                type="radio"
                                id="paid"
                                value="wallet"
                                name="shipping"
                                disabled
                              />
                            </div>
                            <div>
                              <p>wallets</p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Molestias, iste.
                              </p>
                            </div>
                            <div className="m-auto">
                              <AccountBalanceWalletIcon />
                            </div>
                          </div>
                        </div>
                        <div className="payBtn">
                          <div>
                            <Link to="/ship">
                              <button className="btn payBtnBack">Back</button>
                            </Link>
                          </div>
                          <div>
                            <button className="btn payBtnNext">Pay Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <Summary />
                    </div>
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

export default Shipping;
