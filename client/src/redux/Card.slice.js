import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        QTY: 0
    },
    reducers: {
        addToCart: (state) => {

            state.QTY += 1;
        },

    },
    extraReducers: builder => builder


})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer