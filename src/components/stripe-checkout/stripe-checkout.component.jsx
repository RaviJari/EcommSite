import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceCheckout = price * 100;
  const publishablekey = 'pk_test_51IduVfSEmlbRa64IaT9p46v2YQf3JY4TluC7ULRCSv1ns2NPxTKg69cqBKWKldVk48OBSBLBMhf7WTAgudhFvTLQ008FHgGY8h';

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="RDJ-Clothing Pvt. Ltd."
      billingAddress
      shippingAddress
      currency='USD'
      image=""
      description={`your total is $${price}`}
      amount={priceCheckout}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
