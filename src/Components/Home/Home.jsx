import { Suspense } from "react";
import { Link } from "react-router";
import { useProducts } from "../../Hooks/useProducts";
import ProductCard from "./ProductCard";

const Home = () => {
  // const products = useLoaderData()
  const { products, loading, error } = useProducts()
  // cut 6 product to 16 
  const featuredProducts = products.slice(0, 6)
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <Link to="/products" className="text-blue-500 hover:underline">
          See All Products
        </Link>
      </div>
      

      <Suspense
        fallback={
          <div className="text-center py-10">Loading featured products...</div>
        }
      >
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