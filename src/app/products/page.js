import React from 'react'
import ProductGrid from '@/app/components/ProductGrid';
import SubPagesBanner from '@/app/components/SubPagesBanner';

import path from "path";
import { promises as fs } from "fs";

async function getProductData(category) {
  const filePath = path.join(process.cwd(), "src/app/api/productsData.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const productsData = JSON.parse(jsonData);
  // console.log(productsData);
  return productsData[category] || [];
}

    
const page = async () => {

  const products = await getProductData("products");
  // console.log(products);
  return (
    <div className='px-5 sm:px-10'>
      <SubPagesBanner title="All Products" description="Discover our All Products page, featuring a diverse collection of fashion items including trendy shirts, stylish trousers, versatile pants, and more. Perfect for every occasion, style, and wardrobe update."/>
      <ProductGrid products={products} routeType="type"/>
    </div>
  )
}

export default page
