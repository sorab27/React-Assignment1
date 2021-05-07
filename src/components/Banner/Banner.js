import React from "react";
import classes from "./Banner.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { ProductConsumer } from "../../context";

function Banner() {
  const getData = (e) => {
    e.preventDefault();
  };
  const debounce = function (fun, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(context, args);
      }, delay);
    };
  };
  const result = debounce(getData, 500);
  return (
    <div className={classes.Banner}>
      <h1>Shop dill khol ke!</h1>
      <div className={classes.Search}>
        <div className={classes.Input}>
          <SearchIcon />
          <ProductConsumer>
            {(value) => {
              const { products } = value;
              if (products.length > 0) {
                return (
                  <React.Fragment>
                    <input type="text" onKeyUp={result} products={products} />
                  </React.Fragment>
                );
              }
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}

export default Banner;
