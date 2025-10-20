
const ProductCard = ({ product }) => {
  console.log(product)
  const {category,description,dimensions,image,material,name,price} = product


 
  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt={name || 'Product image'}  />
      </figure>
      <div className="px-4 py-2 text-sm text-gray-600 space-y-1">
        <div>Category: {category}</div>
        <div>Dimensions: {dimensions}</div>
        <div>Material: {material}</div>
      </div>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <div className="card-actions justify-between items-center ">
          <div>Price: ${price}</div>
          <button className="btn btn-primary" aria-label={`Buy ${name}`}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard