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
        toast.success(`Increased ${state.cartItems[itemIndex].name} cart quantity`, toastConfig)
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.name} added to cart`, toastConfig)
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.info(`${action.payload.name} cart quantity decreased`, toastConfig)
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        state.cartItems = nextCartItems
        toast.error(`${action.payload.name} removed from cart`, toastConfig)
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    getTotals(state) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, salePrice, cartQuantity } = cartItem
          const itemTotal = (salePrice ? salePrice : price) * cartQuantity
          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity
          return cartTotal
        },
        { total: 0, quantity: 0 }
      )
      state.cartTotalAmount = total
      state.cartTotalQuantity = quantity
    }
  }
})

export const { addToCart, decreaseCart, getTotals } = CartSlice.actions

export default CartSlice.reducer
