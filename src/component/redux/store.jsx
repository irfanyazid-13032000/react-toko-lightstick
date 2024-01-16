import { configureStore } from "@reduxjs/toolkit";
import daganganReducer from "./daganganSlice";

export const store = configureStore({
  reducer:{
    dagang:daganganReducer
  }
})