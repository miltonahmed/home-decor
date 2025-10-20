import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";

const Home = () => {
  const products = useLoaderData()
  console.log(products)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home