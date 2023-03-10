import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice, 
        product: productSlice.reducer,
    }
})

export default store;