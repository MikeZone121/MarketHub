/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { toast } from "react-toastify"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { toastConfig } from "../../config/Toast"
import { initialWishlistState, ProductModel } from "../types"

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist(state, action: PayloadAction<ProductModel>) {
      const tempProduct = { ...action.payload, wishlistQuantity: 1 }
      state.wishlistItems.push(tempProduct)
      toast.success(`${action.payload.name} added to wishlist`, {
        ...toastConfig,
        toastId: `${action.payload.id}-added-wishlist`
      })
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems))
    },

    removeFromWishlist(state, action) {
      const nextWishlistItems = state.wishlistItems.filter(wishlistItem => wishlistItem.id !== action.payload.id)
      state.wishlistItems = nextWishlistItems
      toast.error(`${action.payload.name} removed from wishlist`, {
        ...toastConfig,
        toastId: `${action.payload.id}-removed-wishlist`
      })
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems))
    },

    getTotals(state) {
      const { total, quantity } = state.wishlistItems.reduce(
        (wishlistTotal, wishlistItem) => {
          const { price, salePrice, wishlistQuantity } = wishlistItem
          const itemTotal = (salePrice ? salePrice : price) * wishlistQuantity
          wishlistTotal.total += itemTotal
          wishlistTotal.quantity += wishlistQuantity
          return wishlistTotal
        },
        { total: 0, quantity: 0 }
      )
      state.wishlistTotalAmount = total
      state.wishlistTotalQuantity = quantity
    }
  }
})

export const { addToWishlist, removeFromWishlist, getTotals } = WishlistSlice.actions

export default WishlistSlice.reducer
