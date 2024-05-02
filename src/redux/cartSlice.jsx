import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state) => {
      state.products.pop();
    },
    clearCart: (state) => {
      state.products.length = [];
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
