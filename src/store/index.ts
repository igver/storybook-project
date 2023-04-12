import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { modalReducer } from "./modal";
import { productReducer } from "./products";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
