// ProductListing.js
import React from 'react';

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
