import React from "react";
import { ProductConsumer } from "../../../context";

function Summary() {
  return (
    <div className="summary">
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
                <div className="cartSummary">
                  <h3>summary</h3>
                  <ProductConsumer>
                    {(value) => {
                      const { cart } = value;
                      if (cart.length > 0) {
                        return (
                          <React.Fragment>
                            {cart.map((product) => {
                              return (
                                <div className="cartProduct">
                                  <div className="cartProductImg">
                                    <img src={product.img} alt="" />
                                  </div>
                                  <div className="cartProductInfo">
                                    <p>
                                      {product.title} ({variant})
                                    </p>
                                    <p>$ {product.price}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </React.Fragment>
                        );
                      }
                    }}
                  </ProductConsumer>
                  <div className="cartSubtotalComplete">
                    <div className="cartSubtotal mt-5">
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
            );
          }
        }}
      </ProductConsumer>
    </div>
  );
}

export default Summary;
