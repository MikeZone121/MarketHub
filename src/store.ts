import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./services/cart/CartSlice"
import { productsApi } from "./services/products"

export const store = configureStore({
  reducer: {
    cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
