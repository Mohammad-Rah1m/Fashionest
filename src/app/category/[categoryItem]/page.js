import React from "react";
import ProductGrid from "@/app/components/ProductGrid";
import SubPagesBanner from "@/app/components/SubPagesBanner";
import { getProductData } from "@/lib/utils/getProduct";


const page = async ({ params }) => {
  const { categoryItem } = params;
  const products = await getProductData("products");
  const productType = products.filter(productCategory => productCategory.category === categoryItem);
  // console.log(shirts);
  return (
    <div className="px-5 sm:px-10">
      <SubPagesBanner title={`${categoryItem}`} description="Discover our exclusive range of high-quality fashion products. Enjoy seamless shopping, competitive prices, and exceptional customer service, making your online shopping experience enjoyable and hassle-free."/>
      <ProductGrid products={productType} routeType="category"/>
    </div>
  );
};

export default page;
