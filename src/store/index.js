import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "../features/shopSlice.js"
import { setupListeners } from "@reduxjs/toolkit/query"
import { shopApi } from "../services/shopServices.js"
import { authApi } from "../services/authServices.js";
import cartReducer from "../features/cartSlice.js"
import authReducer from "../features/authSlice";

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store