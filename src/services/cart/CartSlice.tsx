/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { toast } from "react-toastify"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import Undo from "../../components/Atoms/Notification"
import { toastConfig } from "../../config/Toast"
import { initialCartState, ProductModel } from "../types"

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCartPopUp(state, action: PayloadAction<boolean>) {
      state.cartPopUpIsOpen = action.payload
    },
    addToCart(state, action: PayloadAction<ProductModel>) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity++
      } else {
        const tempProduct = { id: action.payload.id, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
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
    }
    /*     getTotals(state) {
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
    } */
  }
})

export const { addToCart, decreaseCart, toggleCartPopUp } = CartSlice.actions

export default CartSlice.reducer
