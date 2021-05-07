import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, ratings } = this.props.product;
    return (
      <div className="col-12 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-2 d-flex"
                onClick={() => value.handleDetail(id)}
              >
                <div className="imgContainer">
                  <Link to="/details">
                    <img src={img} alt="product img" className="card-img-top" />
                  </Link>

                  <button
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in cart
                      </p>
                    ) : (
                      <AddShoppingCartIcon />
                    )}
                  </button>
                </div>
                <div className="card-footer">
                  <Link to="/details">
                    <div>
                      <p className="align-self-center mb-0">{title}</p>
                    </div>
                    <div className="productRating">{ratings}</div>
                    <div>
                      <h5 className="text-blue font-italic mb-0">${price}</h5>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
