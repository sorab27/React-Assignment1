import React from "react";
import "./Products.css";
import Product from "../Product/Product";
import { ProductConsumer } from "../../context";
import Banner from "../Banner/Banner";

function Products() {
  return (
    <React.Fragment>
      <Banner />
      <div className="py-5">
        <div className="container text-center">
          <h2>Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            adipisci dolores ea ducimus. Earum, a.
          </p>
          <div className="col-sm-12">
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
