// src/app/products/[id]/page.js (Server Component)
import { getProductData } from "@/lib/utils/getProduct";
import ProductDetails from "./ProductDetails";

// This is a server-side component
export default async function ProductPage({ params }) {
  const { id } = params;
  const [title, ProductId] = id.split("-");

  const products = await getProductData("products");
  const productItem = products.find(product => product.id === Number(ProductId));

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-40 pb-10 mx-auto sm:pb-20">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Pass productItem to a Client Component */}
          <ProductDetails productItem={productItem} />
        </div>
      </div>
    </section>
  );
}
