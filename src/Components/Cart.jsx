import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeProduct } from "../redux/cartSlice";

const Cart = () => {
  const selector = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  console.log(selector);

  const removeCartProduct = () => {
    dispatch(removeProduct());
  };

  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {selector.length > 0 ? (
        <div className="max-w-sm mx-auto">
          <h2 className="text-center text-xl font-semibold my-4">Shopping Cart</h2>
          <div>
            <div className="text-center mb-4">
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={() => emptyCart()}>
                Clear Cart
              </button>
            </div>
            {selector.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imgLink}
                    alt={item.name}
                    className="h-16 w-16 bg-gray-300"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-700">₹ {item.price}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => removeCartProduct(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right p-4 font-medium">
            Total amount: ₹ {selector.reduce((total, item) => total + item.price, 0)}
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-gray-500 text-3xl">Your cart is empty. Add items to view in cart.</p>
          <Link to="/">
            <p className="text-gray-500 text-3xl">Contine Shopping.</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
