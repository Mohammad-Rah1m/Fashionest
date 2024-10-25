import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-containe">
      <div className="footer bg-black flex justify-between px-10 py-10">
        <div className="footer-logo w-2/5">
          <img src="/images/logo-white.svg" className="w-3/4"></img>
          <p className="text-gray-400 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            numquam accusantium quas.
          </p>
        </div>
        <div className="footer-menu w-3/5 flex justify-end gap-8">
          <div className="menu-products">
            <p className="font-bold text-white">Products</p>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm mt-3">Tshirt</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">Pants</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">Trousers</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">Shoes</p></Link>
          </div>
          <div className="menu-products">
            <p className="font-bold text-white">Categories</p>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm mt-3">Man</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">Woman</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">Kids</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">New Arrival</p></Link>
          </div>
          <div className="menu-products">
            <p className="font-bold text-white">Social Media</p>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm mt-3">Instagram</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">Facebook</p></Link>
            <Link href={'tshirt'}><p className="text-gray-400 text-sm">Tiktok</p></Link>
          </div>
        </div>
      </div>
      <div className="footer-copyright py-2">
        <p className="text-center font-semibold">Website Developed By Mohammad Rahim</p>
      </div>
    </div>
  );
};

export default Footer;
