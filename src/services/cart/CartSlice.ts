/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { toast } from "react-toastify"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { toastConfig } from "../../config/Toast"
import { initialCartState, ProductModel } from "../types"

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductModel>) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity++
        toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, toastConfig)
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.name} added to cart`, toastConfig)
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }
  }
})

export const { addToCart } = CartSlice.actions

export default CartSlice.reducer
