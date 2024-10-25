"use client";
import React from "react";
import Link from "next/link";

import { CiShoppingCart, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoIosCloseCircle, IoIosClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

import CountdownTimer from "./CountDownTimer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
} from "@/lib/features/cart/cartSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleIncrementQty = (productId) => {
    dispatch(incrementQuantity(productId));
  };
  const handleDecrementQty = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="header-sale text-xs flex justify-center gap-2 bg-orange-500 px-5 py-2 text-white text-center">
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
        <CountdownTimer />
      </div>
      <div className="main-header px-5 py-5 flex flex-col-reverse items-center gap-2 relative sm:flex-row sm:justify-between sm:px-10">
        <div className="header-menu sm:w-1/3 flex justify-between gap-5 ">
          <ul className="flex gap-2">
            <Link href={"/"}>
              <li>Home</li>
            </Link>

            <div className="relative group">
              <Link href={"/products"}>
                <li>Products</li>
              </Link>
              <ul className="absolute z-50 left-0 mt-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2">
                <Link href={"/products/shirts"}>
                  <li className="py-1 px-4 hover:bg-orange-500 hover:text-white rounded-md">
                    Shirts
                  </li>
                </Link>
                <Link href={"/products/pants"}>
                  <li className="py-1 px-4 hover:bg-orange-500 hover:text-white rounded-md">
                    Pants
                  </li>
                </Link>
              </ul>
            </div>

            <div className="relative group">
              <li className="cursor-pointer">Categories</li>
              <ul className="absolute z-50 left-0 mt-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2">
                <Link href={"/category/man"}>
                  <li className="py-1 px-4 hover:bg-orange-500 hover:text-white rounded-md">
                    Man
                  </li>
                </Link>
                <Link href={"/category/woman"}>
                  <li className="py-1 px-4 hover:bg-orange-500 hover:text-white rounded-md">
                    Woman
                  </li>
                </Link>
                <Link href={"/category/kids"}>
                  <li className="py-1 px-4 hover:bg-orange-500 hover:text-white rounded-md">
                    Kids
                  </li>
                </Link>
              </ul>
            </div>
          </ul>
          <div className="header-buttons flex items-center gap-2 sm:w-1/3 sm:justify-end sm:hidden">
            <CiShoppingCart
              className="text-2xl cursor-pointer"
              onClick={openCart}
            />
            <FaRegUserCircle className="text-lg cursor-pointer" />
          </div>
        </div>
        <div className="header-logo sm:w-1/3 sm:flex sm:justify-center">
          <Link href={"/"}>
            <img
              id="logo"
              src="/images/logo.svg"
              className="w-48 cursor-pointer"
            />
          </Link>
        </div>
        <div className="header-buttons flex items-center gap-2 sm:w-1/3 sm:justify-end hidden sm:flex">
          <CiShoppingCart
            className="text-2xl cursor-pointer"
            onClick={openCart}
          />
          <FaRegUserCircle className="text-lg cursor-pointer" />
        </div>
      </div>
      <div
        className={`sidebar fixed top-0 right-0 w-[300px] bg-gray-200 h-full z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="cart-header flex justify-between items-center px-5 py-5 bg-white">
          <div className="cart-header-title flex items-center gap-4">
            <FaShoppingCart className="text-orange-500 text-2xl" />
            <h1 className="font-medium text-xl">Your Cart</h1>
          </div>
          <div className="cart-header-close">
            <IoIosClose
              className="cursor-pointer text-3xl"
              onClick={closeCart}
            />
          </div>
        </div>
        <div className="px-5">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={item.id} className="flex gap-2 items-center border-t border-gray-300 py-5 first:border-0">
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 object-contain ml-4b bg-white rounded-sm shadow-sm"
                    />
                    <IoIosClose className="text-white bg-gray-400 rounded-full absolute -left-2 -top-2 cursor-pointer"  onClick={() => handleRemoveItem(item.id)} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-orange-500 font-semibold">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <CiCirclePlus
                        className="text-xl cursor-pointer"
                        onClick={() => handleIncrementQty(item.id)}
                      />
                      <span className="text-orange-500 font-semibold">
                        {item.quantity}
                      </span>
                      <CiCircleMinus
                        className="text-xl cursor-pointer"
                        onClick={() => handleDecrementQty(item.id)}
                      />
                    </div>
                  </div>
                  {/* Optional: Display product image */}
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cart-total flex justify-between items-center px-5 bg-white py-3">
          <p className="text-gray-500 text-sm font-semibold">SUB-TOTAL</p>
          <p className="font-bold">${totalPrice}</p>
        </div>
        <div className="cart-btn px-5 py-10">
          <button className="bg-orange-500 w-full py-3 rounded-full text-white hover:bg-orange-600 transition-colors duration-300 ease-in-out">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
