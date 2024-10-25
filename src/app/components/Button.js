"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ url, children }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(url);
  };

  return (
    <div className="mt-3">
      <button
        onClick={handleClick}
        className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 ease-in-out rounded-full text-sm text-white px-5 py-2"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
