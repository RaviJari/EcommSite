import { createSelector } from "reselect";

const SelectCart = (state) => state.cart;

export const SelectCartItems = createSelector(
  [SelectCart],
  (cart) => cart.cartItems
);

export const SelectHidden = createSelector(
    [SelectCart],
    (cart) => cart.hidden
  );
  

export const SelectCartItemsCount = createSelector(
  [SelectCartItems],
  cartItems=>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectTotalPrice = createSelector(
  [SelectCartItems],
  cartItems=>
  cartItems.reduce(
    (accumulatedPrice,cartitems)=>accumulatedPrice + (cartitems.quantity*cartitems.price),0)
  )

