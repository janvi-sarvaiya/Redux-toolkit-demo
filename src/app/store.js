import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoList";
import msgReducer from "../features/counter/msgSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/product/cartSlice";
import { cartApi } from "../features/cart/cartApi";
import cartStoreReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {  
    counter: counterReducer,
    message: msgReducer,
    todo: todoReducer,
    product: productReducer,
    cart: cartReducer,
    [cartApi.reducerPath]: cartApi.reducer,
    cartStore: cartStoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware),
});
