import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart"; // importing reducer

//The store holds the global state
export const store = configureStore({
    reducer: {
        cart: cartReducer,// Add reducers here
    }
})
