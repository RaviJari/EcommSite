import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss";
import { SelectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ items, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-items">Your cart is empty.</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout"); dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: SelectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
