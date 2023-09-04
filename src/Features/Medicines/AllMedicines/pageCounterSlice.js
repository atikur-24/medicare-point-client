import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1,
};

const pageCounterSlice = createSlice({
    name: "pageCounter",
    initialState,
    reducers: {
        increment: state => {
            state.count = state.count + 1;
        },
        decrement: state => {
            state.count = state.count - 1;
        },
    },
});

export const { increment, decrement } = pageCounterSlice.actions;

export default pageCounterSlice.reducer;
