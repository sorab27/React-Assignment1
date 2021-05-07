import Details from "./components/Details/Details";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import Products from "./components/ProductList/Products";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping/Shipping";
import Payment from "./components/Cart/Payment/Payment";
import Success from "./components/Cart/Success/Success";
import Error from "./components/Cart/Error/Error";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Switch>
        <Route path="/" component={Products} exact />
        <Route path="/details" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/ship" component={Shipping} exact />
        <Route path="/payment" component={Payment} exact />
        <Route path="/success" component={Success} exact />
        <Route path="/error" component={Error} exact />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
