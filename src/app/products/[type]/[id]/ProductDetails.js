// src/app/products/[id]/ProductDetails.js (Client Component)
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/lib/features/cart/cartSlice";

const ProductDetails = ({ productItem }) => {
  const [selectedSize, setSelectedSize] = useState("small");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(productItem));
  };

  return (
    <>
      <div className="h-80 w-full lg:w-1/2 flex justify-center rounded-lg items-center overflow-hidden bg-gray-200">
        <img
          alt="ecommerce"
          className="w-full h-full object-contain object-center rounded"
          src={productItem.imageUrl}
        />
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h3 className="text-gray-500 tracking-wide uppercase">{productItem.category}</h3>
        <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
          {productItem.title}
        </h1>
        <p className="text-gray-500">{productItem.description}</p>
        {/* <label htmlFor="size">Size:</label>  */}
        {/* <select
          name="size"
          id="size"
          className="mt-5 border border-gray-300 p-1 ml-2 rounded-md"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select> */}
        <div className="flex mt-6 items-center py-5 border-t-2 border-gray-100 mb-5">
          <span className="title-font font-medium text-2xl text-gray-900">
            ${productItem.price}
          </span>
          <button
            onClick={() => handleAddToCart()}
            className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
