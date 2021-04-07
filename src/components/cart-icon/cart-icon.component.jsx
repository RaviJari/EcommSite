import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {SelectCartItemsCount} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,TotalQuantity}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{TotalQuantity}</span>
    </div>
)

const mapDispacthToProps = dispatch => ({
   toggleCartHidden : () => dispatch(toggleCartHidden()) 
})

const mapStateToProps = createStructuredSelector({
    TotalQuantity : SelectCartItemsCount
})


export default connect(mapStateToProps,mapDispacthToProps)(CartIcon);