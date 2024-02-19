import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import totalSlice from "./totalSlice";
import authTokenSlice from "./authTokenSlice";

const appStore = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        total: totalSlice,
        authToken: authTokenSlice
    }
});

export default appStore;