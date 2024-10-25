import React from "react";

const Product = () => {
  return (
    <div className="product">
        <div className="product-img">
            <img src="/images/products/go-walk.png"></img>
        </div>
        <div className="product-details">
            <h1>Product Name</h1>
            <h2>Product Category</h2>
            <h3>Product Price</h3>
        </div>
    </div>
  );
};

export default Product;
