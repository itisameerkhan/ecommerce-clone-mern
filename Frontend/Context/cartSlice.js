import { createSlice } from "@reduxjs/toolkit";
import all_product from "../Components/assets/all_product";

let cartItems = [];

for(let i=0;i<all_product.length;i++) {
    cartItems[i] = 0;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartItems,
    reducers: {
        addItem: (state, action) => {
            state[action.payload]++;
        },
        removeItem: (state, action) => {
            state[action.payload]--;
        },
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer; 