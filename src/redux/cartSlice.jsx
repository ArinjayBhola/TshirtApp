import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const cartItem = {
        id: action.payload.id,
        product: action.payload,
        quantity: 1,
      };
      const index = state.products.filter((item) => item.id === action.payload.id);
      if (index.length === 0) {
        state.products.push(cartItem);
      } else {
        if (index[0].quantity < action.payload.quantity) {
          index[0].quantity++;
        }
      }
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
