import React, { Component } from "react";
import { storeProducts } from "./data";
import { detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    coupon: 0,
    promoCode: "BOOTCAMP2021",
    promoCode2: "bootcamp2021",
    delivery: 0,
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    country: "India",
    city: "",
    zipCode: "",
    phoneNumber: "",
    variant: "Black",
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const discount = subTotal * 0.05;
    const tax = parseFloat(discount.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  shippingPrice = () => {
    this.setState(() => {
      return { delivery: 20 };
    });
  };

  freeShipPrice = () => {
    this.setState(() => {
      return {
        delivery: 0,
      };
    });
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
          coupon: 0,
          delivery: 0,
          firstName: "",
          lastName: "",
          address: "",
          address2: "",
          country: "India",
          city: "",
          zipCode: "",
          phoneNumber: "",
          variant: "Black",
        };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  usingCoupon = (e) => {
    if (e === this.state.promoCode || e === this.state.promoCode2) {
      this.setState(() => {
        return {
          coupon: this.state.cartTotal * 0.1,
        };
      });
    }
  };

  firstNameHandler = (e) => {
    this.setState(() => {
      return {
        firstName: e,
      };
    });
  };

  lastNameHandler = (e) => {
    this.setState(() => {
      return {
        lastName: e,
      };
    });
  };

  addressHandler = (e) => {
    this.setState(() => {
      return {
        address: e,
      };
    });
  };

  address2Handler = (e) => {
    this.setState(() => {
      return {
        address2: e,
      };
    });
  };

  countryHandler = (e) => {
    this.setState(() => {
      return {
        country: e,
      };
    });
  };

  variantHandler = (e) => {
    this.setState(() => {
      return {
        variant: e,
      };
    });
  };

  cityHandler = (e) => {
    this.setState(() => {
      return {
        city: e,
      };
    });
  };

  zipCodeHandler = (e) => {
    this.setState(() => {
      return {
        zipCode: e,
      };
    });
  };

  phoneNumberHandler = (e) => {
    this.setState(() => {
      return {
        phoneNumber: e,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          usingCoupon: this.usingCoupon,
          shippingPrice: this.shippingPrice,
          freeShipPrice: this.freeShipPrice,
          firstNameHandler: this.firstNameHandler,
          lastNameHandler: this.lastNameHandler,
          addressHandler: this.addressHandler,
          address2Handler: this.address2Handler,
          countryHandler: this.countryHandler,
          cityHandler: this.cityHandler,
          zipCodeHandler: this.zipCodeHandler,
          phoneNumberHandler: this.phoneNumberHandler,
          variantHandler: this.variantHandler,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
