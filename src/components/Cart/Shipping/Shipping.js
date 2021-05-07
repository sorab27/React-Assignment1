import React from "react";
import "./Shipping.css";
import CartNav from "../CartNav/CartNav";
import { Link, useHistory } from "react-router-dom";
import Summary from "../Summary/Summary";
import { ProductConsumer } from "../../../context";
import EmptyCart from "../EmptyCart/EmptyCart";

function Shipping() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/payment");
  };

  return (
    <ProductConsumer>
      {(value) => {
        let {
          cart,
          delivery,
          firstName,
          lastName,
          address,
          address2,
          country,
          city,
          zipCode,
          phoneNumber,
        } = value;
        if (cart.length > 0) {
          return (
            <React.Fragment>
              <div className="shipping">
                <CartNav />
                <div className="ship">
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <h3>shipping details</h3>
                      <form onSubmit={handleSubmit} className="shipForm">
                        <div className="form-row mt-5">
                          <div className="form-group col-md-6">
                            <input
                              onChange={(e) => {
                                value.firstNameHandler(e.target.value);
                              }}
                              className="form-control"
                              id="inputFirstName4"
                              placeholder="First Name"
                              type="text"
                              value={firstName}
                              required
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              onChange={(e) => {
                                value.lastNameHandler(e.target.value);
                              }}
                              className="form-control"
                              id="inputLastName4"
                              placeholder="Last Name"
                              value={lastName}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            onChange={(e) => {
                              value.addressHandler(e.target.value);
                            }}
                            className="form-control"
                            id="inputAddress"
                            placeholder="Address"
                            value={address}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            onChange={(e) => {
                              value.address2Handler(e.target.value);
                            }}
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Address 2"
                            value={address2}
                            required
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <select
                              id="inputCountry"
                              className="form-control"
                              placeholder="Country"
                              value={country}
                              onChange={(e) => {
                                value.countryHandler(e.target.value);
                              }}
                              required
                            >
                              <option>India</option>
                              <option>Nepal</option>
                              <option>China</option>
                              <option>Pakistan</option>
                              <option>Sri Lanka</option>
                              <option>Bhutan</option>
                              <option>Bangladesh</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              onChange={(e) => {
                                value.cityHandler(e.target.value);
                              }}
                              className="form-control"
                              id="inputCity"
                              placeholder="City"
                              value={city}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input
                              type="text"
                              onChange={(e) => {
                                value.zipCodeHandler(e.target.value);
                              }}
                              className="form-control"
                              id="inputZip"
                              placeholder="Zip/Postal Code"
                              value={zipCode}
                              maxLength="6"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="tel"
                              onChange={(e) => {
                                value.phoneNumberHandler(e.target.value);
                              }}
                              className="form-control"
                              id="inputNumber"
                              placeholder="Phone Number"
                              value={phoneNumber}
                              maxLength="10"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row shipRadioDiv">
                          <div className="form-group col-md-6">
                            <div>
                              <input
                                type="radio"
                                id="free"
                                name="shipping"
                                value={delivery}
                                onClick={() => {
                                  value.freeShipPrice();
                                }}
                              />
                            </div>

                            <div>
                              <p>Free Shipping</p>
                              <p>between 2-5 working days</p>
                            </div>
                          </div>
                          <div className="form-group col-md-6">
                            <div>
                              <input
                                type="radio"
                                id="paid"
                                value={delivery}
                                onClick={() => {
                                  value.shippingPrice();
                                }}
                                name="shipping"
                              />
                            </div>
                            <div>
                              <p>Next Day Delivery - $20</p>
                              <p>24 hours from checkout</p>
                            </div>
                          </div>
                        </div>
                        <div className="shipBtn">
                          <div>
                            <Link to="/cart">
                              <button className="btn shipBtnBack">Back</button>
                            </Link>
                          </div>
                          <div>
                            <button type="submit" className="btn shipBtnNext">
                              Next
                            </button>
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
