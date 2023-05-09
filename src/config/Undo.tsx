import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

import { addToCart } from "../services/cart/CartSlice"
import { ProductModel } from "../services/types"

function Undo({ message, product, toastId }: { message: string; product: ProductModel; toastId: string }) {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }
  const dismiss = () => toast.dismiss(toastId)

  return (
    <div className="Toastify__toast-body tw-flex tw-flex-col tw-items-start">
      <p className="tw-mr-4">{message}</p>
      <a
        className="tw-cursor-pointer tw-underline hover:tw-text-primary"
        onClick={() => {
          handleAddToCart()
          dismiss()
        }}
      >
        Undo
      </a>
    </div>
  )
}

export default Undo
