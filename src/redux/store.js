import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-cart/productSlice";
import productModalSlice from "./product-modal/productModalSlice";
import AuthenticationSlice from "./auth/AuthenticationSlice";

export const store = configureStore({
  reducer: {
    cartItems: productSlice,
    productModal: productModalSlice,
    auth: AuthenticationSlice,
  },
});
