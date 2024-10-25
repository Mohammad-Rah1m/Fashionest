'use client'; // Ensure this is a client component

import React from 'react'
import { useRouter } from 'next/navigation';

const ProductGrid = ({products, routeType}) => {
  const router = useRouter();
  const handleProductClick = (title,type,category,id) => {
    // Navigate to the product detail page using the dynamic route
    if (routeType === 'type') {
      router.push(`/products/${type}/${title}-${id}`); // For product type route
    } else if (routeType === 'category') {
      router.push(`/category/${category}/${title}-${id}`); // For category route
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-10 mx-auto">
        <div className="flex flex-wrap justify-center gap-10 sm:gap-2">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-1/4 sm:mt-5 cursor-pointer" onClick={() => handleProductClick(product.title,product.type,product.category,product.id)}>
            <div className="h-64 flex justify-center rounded-lg items-center overflow-hidden bg-gray-200">
              <img
                alt={product.title}
                className="object-contain w-full h-full"
                src={product.imageUrl}
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.title}
              </h2>
              <p className="mt-1">${product.price}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
