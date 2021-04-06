import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({items}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                items.map(item => <CartItem key={item.id} item={item}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart}) => ({
    items : cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);