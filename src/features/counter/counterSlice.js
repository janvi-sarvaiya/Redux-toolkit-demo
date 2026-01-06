import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: 0,
};

export const counetrSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    incrememnt: (state) => {
      state.value += 1;
    },
    decremennt: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decremenntByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { incrememnt, decremennt, incrementByAmount, decremenntByAmount } =
  counetrSlice.actions;

export default counetrSlice.reducer;
