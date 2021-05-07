import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import "./Details.css";
import Review from "../Reviews/Review";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            img,
            img2,
            img3,
            info,
            price,
            title,
            inCart,
            ratings,
            review,
          } = value.detailProduct;
          return (
            <React.Fragment>
              <div className="conatiner detailRow">
                <div className="row ml-0 mr-0">
                  <div className="col-10 m-auto col-md-6 my-3 text-center p-2">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className="active"
                        >
                          <img src={img} alt="ProductImg-1" />
                        </li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        >
                          <img src={img2} alt="ProductImg-2" />
                        </li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                        >
                          <img src={img3} alt="ProductImg-3" />
                        </li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="img-fluid"
                            src={img}
                            alt="First slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid"
                            src={img2}
                            alt="Second slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid"
                            src={img3}
                            alt="Third slide"
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-10 m-auto col-md-6 my-3 p-2">
                    <h1 className="detailTitle">{title}</h1>
                    <div className="d-flex">
                      <p>{ratings}</p>
                      <span className="ml-5 mt-1">
                        {Object.keys(review).length} reviews
                      </span>
                    </div>
                    <div className="detailPrice">
                      <div>
                        <p>
                          Price: <span>$</span>
                          {price}
                        </p>
                      </div>
                      <div>
                        <select
                          className="detailSelect"
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
                    </div>

                    <p className="text-muted detailInfo">{info}</p>
                    <div>
                      <Link to="/cart">
                        <button
                          className="text-capitalize btn detailBtn"
                          disabled={inCart ? true : false}
                          onClick={() => {
                            value.addToCart(id);
                          }}
                        >
                          {inCart ? "inCart" : "add to cart"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Review review={review} ratings={ratings} />
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
