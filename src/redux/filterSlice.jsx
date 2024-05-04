import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  red: false,
  blue: false,
  green: false,
  men: false,
  women: false,
  polo: false,
  hoodie: false,
  basic: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const filter = action.payload;
      state[filter] = !state[filter];
    },
  },
});

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
