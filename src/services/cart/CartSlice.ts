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
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.info(`${action.payload.title} cart quantity decreased`, toastConfig)
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        state.cartItems = nextCartItems
        toast.error(`${action.payload.title} removed from cart`, toastConfig)
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    RemoveFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      state.cartItems = nextCartItems
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      toast.success(`${action.payload.title} removed from cart`, toastConfig)
    },
    getTotals(state) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity
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

export const { addToCart, decreaseCart, RemoveFromCart, getTotals } = CartSlice.actions

export default CartSlice.reducer
