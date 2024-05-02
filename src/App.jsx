import "./index.css";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex">
                  <SideBar />
                  <ProductList />
                </div>
              }
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
