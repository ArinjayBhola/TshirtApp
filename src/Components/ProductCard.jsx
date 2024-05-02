/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div className="relative m-3 p-3 w-72 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300">
      <div className="absolute top-7 left-7 bg-white bg-opacity-90 px-3 py-2 rounded-br-lg shadow">
        <p className="font-semibold text-gray-800">{product.name}</p>
      </div>
      <img
        src={product.imgLink}
        alt="Product Image"
        className="h-64 w-64 m-auto rounded-lg"
      />
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-gray-700">₹{product.price}</p>
            <p className="text-sm text-gray-600">{product.quantity} left</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white font-medium rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
