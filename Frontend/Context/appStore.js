import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import totalSlice from "./totalSlice";

const appStore = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        total: totalSlice,
    }
});

export default appStore;