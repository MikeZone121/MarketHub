/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { toast } from "react-toastify"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { toastConfig } from "../../config/Toast"
import Undo from "../../config/Undo"
import { initialCartState, ProductModel } from "../types"

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductModel>) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity++
        toast.success(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
          ...toastConfig,
          toastId: `${action.payload.id}-increased`
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.name} added to cart`, {
          ...toastConfig,
          toastId: `${action.payload.id}-added`
        })
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.info(`${action.payload.name} cart quantity decreased`, {
          ...toastConfig,
          toastId: `${action.payload.id}-decreased`
        })
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        state.cartItems = nextCartItems
        const toastId = `${action.payload.id}-removed`
        toast.error(
          <Undo toastId={toastId} product={action.payload} message={`${action.payload.name} removed from cart`} />,
          {
            ...toastConfig,
            toastId
          }
        )
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
