import React from "react";
import ProductGrid from "@/app/components/ProductGrid";
import SubPagesBanner from "@/app/components/SubPagesBanner";
import { getProductData } from "@/lib/utils/getProduct";

const page = async ({ params }) => {
  const { type } = params;
  const products = await getProductData("products");
  const productType = products.filter(productType => productType.type === type);
  // console.log(shirts);
  return (
    <div className="px-5 sm:px-10">
      <SubPagesBanner title={`${type}`} description="Discover our exclusive range of high-quality fashion products. Enjoy seamless shopping, competitive prices, and exceptional customer service, making your online shopping experience enjoyable and hassle-free."/>
      <ProductGrid products={productType} routeType="type"/>
    </div>
  );
};

export default page;
