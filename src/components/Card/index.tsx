import { MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import { addToCart } from "../../services/cart/CartSlice"
import { ProductCategory, ProductModel } from "../../services/types"
import Button from "../Atoms/Button"
import { BtnVariantEnum } from "../Atoms/Button/types"
import Text from "../Atoms/Text"
import { TextVariantEnum } from "../Atoms/Text/types"
import Title from "../Atoms/Title"
import { TitleSizeEnum } from "../Atoms/Title/types"

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
      className="tw-card tw-group tw-flex tw-h-full tw-cursor-pointer tw-flex-col tw-justify-between tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-10 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-gray-200"
      onClick={() => navigate(`/shop/${slug ?? ""} `)}
    >
      <div>
        <div className="tw-prod-img tw-relative">
          <span className="tw-absolute tw-right-0 tw-z-10">
            <Button
              variant={BtnVariantEnum.TEXTICON}
              icon={faHeart}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
              }}
              iconClassName="tw-text-2xl hover:!tw-text-primary"
            />
          </span>
          <img
            src={images[0].url}
            onError={({ currentTarget }) => {
              currentTarget.src = "images/branding/logo.svg"
            }}
            className="tw-m-auto tw-w-3/4 tw-object-contain tw-object-center tw-transition-all tw-duration-200 group-hover:tw-scale-105"
          />
        </div>
        <div className="tw-prod-title tw-mt-4 tw-flex tw-flex-col tw-items-center md:tw-items-start">
          {categories?.map((category: ProductCategory) => (
            <Text
              key={category.id}
              text={category.name}
              variant={TextVariantEnum.SMALL}
              className="tw-font-extralight tw-uppercase tw-tracking-widest tw-text-gray-400"
            />
          ))}

          <Title className="!tw-font-bold tw-uppercase" size={TitleSizeEnum.H5} text={name} />
        </div>
      </div>
      <div className="tw-prod-info tw-mt-4 tw-grid tw-gap-4">
        <div className="tw-flex  tw-flex-col tw-items-center tw-justify-center tw-space-y-4 tw-text-gray-900 md:tw-flex-row md:tw-justify-between md:tw-space-y-0">
          <p className="tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-3xl tw-font-bold tw-text-primary">
            € {salePrice ? salePrice : price}
            {salePrice && (
              <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">€ {price}</span>
            )}
          </p>
          <Button variant={BtnVariantEnum.FULL} text="Add to cart" onClick={() => handleAddToCart()} />
        </div>
      </div>
    </div>
  )
}

export default Card
