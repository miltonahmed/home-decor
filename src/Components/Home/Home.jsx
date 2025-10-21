import { Suspense } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";

const Home = () => {
  const products = useLoaderData()
  console.log(products)
  const featuredProducts = products.slice(0, 6)
  return (
    <div>
      <Suspense fallback='loading...........'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default Home