import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';  

import { SelectCurrentUser } from "../../redux/user/user.selector";
import { SelectHidden } from "../../redux/cart/cart.selector";
import {createStructuredSelector} from 'reselect';

import {HeaderContainer , LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles';

const Header = ({ currentUser , hidden}) => (
  <HeaderContainer className="header">
    <LogoContainer className="logo-container" to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer className="options">
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon/>
    </OptionsContainer>{hidden ? null : <CartDropdown/>}
    
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser : SelectCurrentUser,
  hidden : SelectHidden
});

export default connect(mapStateToProps)(Header);
