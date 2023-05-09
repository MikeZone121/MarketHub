import { MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { faBasketShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

import { addToCart } from "../../../services/cart/CartSlice"
import { ProductCategory, ProductModel } from "../../../services/types"
import Button from "../../Atoms/Button"
import { BtnVariantEnum } from "../../Atoms/Button/types"
import Text from "../../Atoms/Text"
import { TextVariantEnum } from "../../Atoms/Text/types"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"

function Card({ product }: { product: ProductModel }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id, name, categories, images, price, salePrice, slug } = product
  const handleAddToCart = () => {
    dispatch(addToCart(product))
    navigate("/cart")
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
          }}
          className="tw-rounded-full tw-bg-white tw-p-2 tw-shadow-md"
          iconClassName="tw-text-xl !tw-text-gray-300 hover:!tw-text-primary"
        />
      </span>
      <div className="tw-flex tw-flex-col">
        <div className="tw-prod-img tw-relative md:tw-w-full">
          <img
            src={images[0].url}
            onError={({ currentTarget }) => {
              currentTarget.src = "images/branding/logo.svg"
            }}
            className="tw-m-auto tw-w-3/4 tw-object-contain tw-object-center tw-transition-all tw-duration-200 group-hover:tw-scale-105"
          />
        </div>
        <div className="tw-prod-title tw-flex tw-flex-col md:tw-mt-4 md:tw-items-start">
          {categories?.map((category: ProductCategory) => (
            <Text
              key={category.id}
              text={category.name}
              variant={TextVariantEnum.SMALL}
              className="tw-font-extralight tw-uppercase tw-tracking-widest tw-text-gray-400"
            />
          ))}

          <Title className="!tw-font-bold tw-uppercase !tw-text-gray-600" size={TitleSizeEnum.H6} text={name} />
        </div>
      </div>
      <div className="tw-mt-2 tw-grid tw-gap-4 2xl:tw-mt-4">
        <div className="tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-4 tw-text-gray-900 md:tw-justify-between xl:tw-flex-col 2xl:tw-flex-row 2xl:tw-space-y-0 2xl:tw-space-y-4">
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
            isFullWidth
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation()
              handleAddToCart()
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
