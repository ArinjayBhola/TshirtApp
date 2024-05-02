const Sidebar = () => {
  return (
    <div className="bg-gray-100 h-screen p-5 w-9/12">
      <div className="flex flex-col">
        <strong className="font-bold text-lg mb-4">Colour</strong>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-red-600"
            />
            <span className="ml-2">Red</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">Blue</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-green-600"
            />
            <span className="ml-2">Green</span>
          </label>
        </div>

        <strong className="font-bold text-lg mb-4 mt-5">Gender</strong>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">Men</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">Women</span>
          </label>
        </div>

        <strong className="font-bold text-lg mb-4 mt-5">Price</strong>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">₹ 0-250</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">₹ 251-450</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">₹ 450</span>
          </label>
        </div>

        <strong className="font-bold text-lg mb-4 mt-5">Type</strong>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">Polo</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">Hoodie</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
            />
            <span className="ml-2">Basic</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
