import { useEffect, useState } from "react";
import { products } from "../Data/data";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const selector = useSelector((state) => state.filter);

  useEffect(() => {
    filterProducts();
  }, [selector]);
  // const filtered = products.filter((item) => {
  //   if (!selector.red && item.color === "Red") {
  //     return false;
  //   }
  // });
  // console.log(!selector.red);

  const filterProducts = () => {
    const filtered = products.filter((item) => {
      if (selector.red == true && item.color === "Red") {
        return false;
      }
      if (selector.green == true && item.color === "Green") {
        return false;
      }
      if (selector.black == true && item.color === "Black") {
        return false;
      }
      if (selector.blue == true && item.color === "Blue") {
        return false;
      }
      if (selector.men == true && item.gender === "Men") {
        return false;
      }
      if (selector.women == true && item.gender === "Women") {
        return false;
      }
      if (selector.polo == true && item.type === "Polo") {
        return false;
      }
      if (selector.hoodie == true && item.type === "Hoodie") {
        return false;
      }
      if (selector.basic == true && item.type === "Basic") {
        return false;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
