import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const selector = useSelector((state) => state.cart.products);
  return (
    <div className="bg-white shadow-md w-full px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">TeeRex Store</h1>
      <div className="flex items-center space-x-4">
        <Link to="/">
          <p className="text-gray-800 font-semibold hover:text-black">Products</p>
        </Link>
        <div className="relative">
          <div className="absolute left-4 -top-3 text-sm">{selector.length}</div>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
