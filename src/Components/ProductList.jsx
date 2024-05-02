import { products } from "../Data/data";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
