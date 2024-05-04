import { useDispatch } from "react-redux";
import { toggleFilter } from "../redux/filterSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleChange = (filterType) => {
    dispatch(toggleFilter(filterType));
  };

  return (
    <div className="bg-gray-100 h-screen p-5 w-1/4">
      <div className="flex flex-col">
        <strong className="font-bold text-lg mb-4">Colour</strong>
        {["Red", "Blue", "Green"].map((color) => (
          <div key={color}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className={`form-checkbox text-${color.toLowerCase()}-600`}
                onClick={() => handleChange(color.toLowerCase())}
              />
              <span className="ml-2">{color}</span>
            </label>
          </div>
        ))}

        <strong className="font-bold text-lg mb-4 mt-5">Gender</strong>
        {["Men", "Women"].map((gender) => (
          <div key={gender}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                onClick={() => handleChange(gender.toLowerCase())}
              />
              <span className="ml-2">{gender}</span>
            </label>
          </div>
        ))}

        <strong className="font-bold text-lg mb-4 mt-5">Type</strong>
        {["Polo", "Hoodie", "Basic"].map((type) => (
          <div key={type}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                onClick={() => handleChange(type.toLowerCase())}
              />
              <span className="ml-2">{type}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
