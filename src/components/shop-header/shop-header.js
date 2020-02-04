import React from 'react';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <a className="logo text-dark" href="/head">
        ReStore
      </a>
      <a href="/cart-icon" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart">
          {numItems} items (${total})
        </i>
      </a>
    </header>
  );
};

export default ShopHeader;
