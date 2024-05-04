import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
});

export default appStore;
