import { createSlice } from "@reduxjs/toolkit";

const totalSlice = createSlice({
    name: 'total',
    initialState: {
        value: 0,
    },
    reducers: {
        addTotal: (state, action) => {
            state.value += action.payload;
        },
        removeTotal: (state, action) => {
            state.value -= action.payload;
        }
    },
});

export const { addTotal, removeTotal } = totalSlice.actions;
export default totalSlice.reducer;