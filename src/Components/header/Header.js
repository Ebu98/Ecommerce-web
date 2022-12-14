import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from '../Cart-Icon/cart-Icon-components';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser } from "../redux/user/user.selector";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import "./Header.style.scss";



const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);