import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  currentCart: null,
};

export const cartSlice = createSlice({
  name: "cartStore",
  initialState: initialValue,
  reducers: {
    setCurrentCart: (state, action) => {
      state.currentCart = action.payload;
    },
    closeCurrentCart: (state) => {
      state.currentCart = null;
    },
  },
});

export const { setCurrentCart, closeCurrentCart } = cartSlice.actions;

export default cartSlice.reducer;
