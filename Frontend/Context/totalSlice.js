import { createSlice } from "@reduxjs/toolkit";

const totalSlice = createSlice({
    name: 'total',
    initialState: {
        value: 0,
        itemsCount: 0,
    },
    reducers: {
        addTotal: (state, action) => {
            state.value += action.payload;
        },
        removeTotal: (state, action) => {
            state.value -= action.payload;
        },
        addCount: (state, action) => {
            state.itemsCount += action.payload;
        },
        removeCount: (state, action) => {
            state.itemsCount -= action.payload;
        }
    },
});

export const { addTotal, removeTotal, addCount, removeCount } = totalSlice.actions;
export default totalSlice.reducer;