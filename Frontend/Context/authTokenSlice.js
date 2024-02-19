import { createSlice } from "@reduxjs/toolkit";

const authTokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        tokenId: null
    },
    reducers: {
        addToken: (state, action) => {
            state.tokenId = action.payload;
        },
        removeToken: (state, action) => {
            state.tokenId = null;
        }
    },
});

export const { addToken, removeToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;