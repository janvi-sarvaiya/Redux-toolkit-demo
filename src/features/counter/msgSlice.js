import { createSlice } from "@reduxjs/toolkit";
import {
  incrememnt,
  decremennt,
  incrementByAmount,
  decremenntByAmount,
} from "./counterSlice";

const initialValue = {
  msg: [],
};

export const msgSlice = createSlice({
  name: "message",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrememnt, (state) => {
        state.msg.push("increment is called");
      })
      .addCase(decremennt, (state) => {
        state.msg.push("decrement is called");
      })
      .addCase(incrementByAmount, (state) => {
        state.msg.push("increment By 5 is called");
      })
      .addCase(decremenntByAmount, (state) => {
        state.msg.push("decrement By 5 is called");
      });
  },
});

export default msgSlice.reducer;
