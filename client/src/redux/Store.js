import { configureStore } from "@reduxjs/toolkit"
import filterSlice from './filter.Slice'
import cartSlice from './Card.slice'


const reduxStore = configureStore({
    reducer: {
        filter: filterSlice,
        card: cartSlice,
    },
})

export default reduxStore