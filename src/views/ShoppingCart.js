// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="shopping-cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
