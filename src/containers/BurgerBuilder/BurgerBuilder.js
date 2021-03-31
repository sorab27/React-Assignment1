import React, { useCallback, useEffect, useState } from "react";
import Aux from "../../hoc/Auxilary";
import { useDispatch, useSelector } from "react-redux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as burgerBuilderActions from "../../store/actions/index";

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const ings = useSelector((state) => state.burgerBuilder.ingredients);

  const price = useSelector((state) => state.burgerBuilder.totalPrice);

  const error = useSelector((state) => state.burgerBuilder.error);

  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const onIngredientAdded = (ingName) =>
    dispatch(burgerBuilderActions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) =>
    dispatch(burgerBuilderActions.removeIngredient(ingName));
  const onInitIngredients = useCallback(
    () => dispatch(burgerBuilderActions.initIngredients()),
    [dispatch]
  );
  const onInitPurchase = () => dispatch(burgerBuilderActions.purchaseInit());
  const onSetAuthRedirectAuth = (path) =>
    dispatch(burgerBuilderActions.setAuthRedirectPath(path));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectAuth("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...ings,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (ings) {
    burger = (
      <Aux>
        <Burger ingredients={ings} />
        <BuildControls
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disabledInfo}
          isAuth={isAuthenticated}
          purchasable={updatePurchaseState(ings)}
          ordered={purchaseHandler}
          price={price}
          ingre={ings}
        />
      </Aux>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ings}
        price={price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     ings: state.burgerBuilder.ingredients,
//     price: state.burgerBuilder.totalPrice,
//     error: state.burgerBuilder.error,
//     isAuthenticated: state.auth.token !== null,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIngredientAdded: (ingName) =>
//       dispatch(burgerBuilderActions.addIngredient(ingName)),
//     onIngredientRemoved: (ingName) =>
//       dispatch(burgerBuilderActions.removeIngredient(ingName)),
//     onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
//     onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
//     onSetAuthRedirectAuth: (path) =>
//       dispatch(burgerBuilderActions.setAuthRedirectPath(path)),
//   };
// };

export default withErrorHandler(BurgerBuilder, axios);
