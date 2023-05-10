import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./services/cart/CartSlice"
import { productsApi } from "./services/products"
import wishlistReducer from "./services/wishlist/WishlistSlice"

export const store = configureStore({
  reducer: {
    cartReducer,
    wishlistReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
