import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import cartSlice from "../slices/cartSlice";
import { apiSlice } from "../slices/apiSlices";
import authSliceReducer from "../slices/authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;
