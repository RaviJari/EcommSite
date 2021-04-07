import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart ,addItem ,removeItem} from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem ,addItem ,removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  console.log(cartItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10096;</div>
        {quantity}
        <div className="arrow" onClick={()=>addItem(cartItem)}>&#10097;</div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10006;
      </span>
    </div>
  );
};

const mapDispatchpProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem : (item) => dispatch(addItem(item)),
  removeItem : (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchpProps)(CheckoutItem);
