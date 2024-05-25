import { configureStore } from "@reduxjs/toolkit";
import StoreSlice from "./StoreSlice";

const store = configureStore({
    reducer:{
        todo:StoreSlice.reducer
    }
})
 
export default store;