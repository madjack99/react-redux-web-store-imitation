import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({ numItems, orderTotal }) => {
  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">
        ReStore
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart">
            {numItems} items (${orderTotal})
          </i>
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, cartItems } }) => {
  return {
    orderTotal,
    numItems: cartItems.length,
  };
};

export default connect(mapStateToProps)(ShopHeader);
