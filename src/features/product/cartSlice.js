import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addToCart: (state, action) => {
      const { productId, pQuantity } = action.payload;
      const existing = state.cartData.find((item) => item.id === productId);
      if (existing) {
        existing.quantity += pQuantity;
      } else {
        state.cartData.push({ id: productId, quantity: pQuantity });
      }
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const data = state.cartData.find(({ id: cartId }) => cartId === id);
      if (data) {
        data.quantity = quantity;
      }
    },
    deleteCart: (state, action) => {
      state.cartData = state.cartData.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addToCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
