import { MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { faBasketShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

import { addToCart } from "../../../services/cart/CartSlice"
import { ProductCategory, ProductModel } from "../../../services/types"
import { addToWishlist, removeFromWishlist } from "../../../services/wishlist/WishlistSlice"
import { RootState } from "../../../store"
import Button from "../../Atoms/Button"
import { BtnVariantEnum } from "../../Atoms/Button/types"
import Text from "../../Atoms/Text"
import { TextVariantEnum } from "../../Atoms/Text/types"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"

function Card({ product, hasDescription }: { product: ProductModel; hasDescription?: boolean }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id, name, categories, description, images, price, salePrice, slug } = product
  const { wishlistItems } = useSelector((state: RootState) => state.wishlistReducer)
  const isInWishlist = wishlistItems.some(item => item.id === id)

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product))
  }

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product))
    } else {
      dispatch(addToWishlist(product))
    }
  }

  return (
    <div
      className="tw-card tw-group tw-relative tw-flex tw-h-full tw-cursor-pointer tw-flex-col tw-justify-between tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-4 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out md:tw-p-10 "
      onClick={() => navigate(`/shop/${slug ?? ""}`)}
      id={`product-${id}`}
    >
      <span className="tw-absolute tw-right-4 tw-top-4 tw-z-10 ">
        <Button
          variant={BtnVariantEnum.TEXTICON}
          icon={faHeart}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()
            handleToggleWishlist()
          }}
          className="tw-rounded-full tw-bg-white tw-p-2 tw-shadow-md active:tw-scale-90 "
          iconClassName={clsx(
            "tw-text-xl  hover:!tw-text-primary",
            isInWishlist ? "tw-text-primary" : "tw-text-gray-300"
          )}
        />
      </span>
      <div className="tw-flex tw-flex-col">
        <div className="tw-prod-img tw-relative md:tw-w-full">
          <img
            src={images[0].url}
            onError={({ currentTarget }) => {
              currentTarget.src = "images/branding/logo.svg"
            }}
            className="tw-m-auto tw-w-3/5 tw-object-contain tw-object-center tw-transition-all tw-duration-200 group-hover:tw-scale-105 md:tw-w-3/4"
          />
        </div>
        <div className="tw-prod-title tw-flex tw-flex-col md:tw-mt-4 md:tw-items-start">
          {categories?.map((category: ProductCategory) => (
            <Text
              key={category.id}
              text={category.name}
              variant={TextVariantEnum.SMALL}
              className="tw-mt-2 tw-text-xs tw-font-extralight tw-uppercase tw-tracking-widest tw-text-gray-400 md:tw-text-sm"
            />
          ))}

          <Title
            className="tw-text-sm !tw-font-bold tw-uppercase !tw-text-gray-600  md:tw-text-md"
            size={TitleSizeEnum.H6}
            text={name}
          />
          {hasDescription && (
            <Text
              className="tw-pt-2 !tw-text-gray-600"
              variant={TextVariantEnum.SMALL}
              text={description && description.length > 90 ? description?.substring(0, 90) + "..." : description}
            />
          )}
        </div>
      </div>
      <div className="tw-mt-2 tw-grid tw-gap-4 2xl:tw-mt-4">
        <div className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-4 tw-text-gray-900 2xl:tw-flex-row 2xl:tw-space-y-0">
          <Text
            variant={TextVariantEnum.NORMAL}
            className={clsx(
              salePrice && "tw-text-primary",
              "tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-3xl tw-font-medium tw-text-gray-600"
            )}
          >
            <span className="tw-text-xl">€ {salePrice ? salePrice : price}</span>
            {salePrice && (
              <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">€ {price}</span>
            )}
          </Text>
          <Button
            variant={BtnVariantEnum.FULL}
            icon={faBasketShopping}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation()
              handleAddToCart()
            }}
            iconClassName="!tw-mr-0 2xl:!tw-mr-2"
          >
            <span className="tw-hidden 2xl:tw-flex">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
