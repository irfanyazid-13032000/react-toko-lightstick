import { configureStore } from "@reduxjs/toolkit";
import daganganReducer from "./daganganSlice";
import keranjangReducer from "./keranjangSlice"

export const store = configureStore({
  reducer:{
    dagang:daganganReducer,
    keranjang:keranjangReducer
  }
})