import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-containe">
      <div className="footer bg-black flex justify-between flex-wrap px-10 py-10 gap-10 sm:flex-nowrap">
        <div className="footer-logo w-full text-center sm:w-2/5 sm:text-left">
          <img src="/images/logo-white.svg" className="w-full"/>
          <p className="text-gray-400 mt-5">
          Fashionest offers trendy, high-quality clothing, accessories, and footwear, curated to elevate your style with versatile, modern pieces for every wardrobe.
          </p>
        </div>
        <div className="footer-menu w-full sm:w-3/5 flex justify-end gap-8">
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
      {/* <div className="footer-copyright py-2 flex justify-between px-10">
        <p className="">Website Developed By <strong>Mohammad Rahim</strong></p>
        <p>Website is still under construction</p>
      </div> */}
    </div>
  );
};

export default Footer;
