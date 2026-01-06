import { fetchProduct } from "./fetchProduct";
import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  product: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        (state.loading = false),
          (state.product = action.payload),
          (state.error = null);
      })
      .addCase(fetchProduct.rejected, (state) => {
        (state.loading = false),
          (state.product = []),
          (state.error = "Product not found!!");
      });
  },
});

export default productSlice.reducer;
