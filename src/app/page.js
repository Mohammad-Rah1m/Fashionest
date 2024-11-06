import Image from "next/image";
import SectionHeading from "@/app/components/SectionHeading";
import ProductGrid from "@/app/components/ProductGrid";
import Button from "@/app/components/Button";

import { getProductData } from "@/app/api/fetchProducts";

export default async function Home() {
  const products = await getProductData("products");
  const productType = products.filter(
    (productCollection) => productCollection.collection === "new"
  );

  return (
    <div className="home-container px-5">
      <div className="hero-section bg-[url('/images/hero-image.jpg')] h-[450px] bg-cover bg-center rounded-lg relative mt-36 sm:mt-28">
        <div className="hero-text absolute left-3 bottom-3 right-3  p-5 rounded-lg text-center sm:left-5 sm:bottom-5 sm:right-auto sm:text-left sm:w-[60%]">
          <h1 className="font-bold text-2xl  sm:text-6xl text-orange-500">
            Welcome To FashioNest
          </h1>
          <p className="text-xl text-white">
            Fashionest is a modern e-commerce website offering stylish fashion
            products, featuring diverse collections, trendy designs, and
            seamless shopping experiences.
          </p>
        </div>
      </div>
      <div className="new-collection pt-14">
        <SectionHeading
          title="New Collection"
          description="Introducing the New Collection at Fashionest, where style meets innovation! This season, we bring you a curated range of fashion-forward pieces designed to elevate your wardrobe."
        />
        <ProductGrid products={productType} routeType="type" />
      </div>
      <div className="wedding pt-5">
        <div className="wedding-image h-[300px] bg-[url('/images/wedding.webp')] bg-cover bg-center rounded-lg"></div>
        <div className="wedding-text mt-10 text-center">
          <h2 className="text-3xl">Wedding Dresses</h2>
          <p className="text-gray-500">
            Extraordinary designs for your unforgetable moments
          </p>
          <Button url="/about">See Details</Button>
        </div>
      </div>
      <div className="categories py-14 flex justify-center gap-10 sm:gap-2 flex-wrap">
        <div className="man relative h-[250px] sm:h-[350px] w-full sm:w-1/4 rounded-lg bg-[url('/images/categories/man/man.jpg')] bg-cover bg-center ">
          <div className="category-text absolute left-[50%] translate-x-[-50%] bottom-5 text-center">
            <h4 className="text-2xl text-white font-bold">MAN</h4>
            <Button url="/category/man">See Details</Button>
          </div>
        </div>
        <div className="man relative h-[250px] sm:h-[350px] w-full sm:w-1/4 rounded-lg bg-[url('/images/categories/woman/woman.jpg')] bg-cover bg-center ">
          <div className="category-text absolute left-[50%] translate-x-[-50%] bottom-5 text-center">
            <h4 className="text-2xl text-white font-bold">WOMAN</h4>
            <Button url="/category/woman">See Details</Button>
          </div>
        </div>
        <div className="man relative h-[250px] sm:h-[350px] w-full sm:w-1/4 rounded-lg bg-[url('/images/categories/kids/kids.jpg')] bg-cover bg-center ">
          <div className="category-text absolute left-[50%] translate-x-[-50%] bottom-5 text-center">
            <h4 className="text-2xl text-white font-bold">KIDS</h4>
            <Button url="/category/kids">See Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
