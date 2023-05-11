import { useDispatch, useSelector } from "react-redux"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

import { ProductModel } from "../../../services/types"
import { addToWishlist, removeFromWishlist } from "../../../services/wishlist/WishlistSlice"
import { RootState } from "../../../store"
import Button from "../../Atoms/Button"
import { BtnVariantEnum } from "../../Atoms/Button/types"

function Heart({ product }: { product: ProductModel }) {
  const { wishlistItems } = useSelector((state: RootState) => state.wishlistReducer)
  const isInWishlist = wishlistItems.some(item => item.id === product.id)
  const dispatch = useDispatch()

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product))
    } else {
      dispatch(addToWishlist(product))
    }
  }
  return (
    <>
      <span className="tw-absolute tw-right-4 tw-top-4 tw-z-10 ">
        <Button
          variant={BtnVariantEnum.TEXTICON}
          icon={faHeart}
          onClick={e => {
            e.stopPropagation()
            handleToggleWishlist()
          }}
          className="tw-rounded-full tw-bg-white tw-p-2 tw-shadow-md active:tw-scale-90 "
          iconClassName={clsx(
            "tw-text-lg  hover:!tw-text-primary",
            isInWishlist ? "tw-text-primary" : "tw-text-gray-300"
          )}
        />
      </span>
    </>
  )
}
export default Heart
