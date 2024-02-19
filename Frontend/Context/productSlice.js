import { createSlice } from "@reduxjs/toolkit";
import all_product from "../Components/assets/all_product";

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProducts: (state, action) => {
            return action.payload
        },
    }
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;