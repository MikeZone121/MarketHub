import { faHeart } from "@fortawesome/free-solid-svg-icons"

import { ProductCategory, ProductModel } from "../../services/types"
import Button from "../Atoms/Button"
import { BtnVariantEnum } from "../Atoms/Button/types"
import Text from "../Atoms/Text"
import { TextVariantEnum } from "../Atoms/Text/types"
import Title from "../Atoms/Title"
import { TitleSizeEnum } from "../Atoms/Title/types"

function Card({ product }: { product: ProductModel }) {
  const { id, name, categories, images, price } = product
  return (
    <div className="tw-flex  tw-w-full tw-items-center tw-justify-center">
      <div className="tw-h-full tw-w-full ">
        <div className="tw-card tw-flex tw-h-full tw-flex-col tw-justify-between tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-10 tw-shadow-md tw-shadow-gray-100">
          <div>
            <div className="tw-prod-img tw-relative">
              <span className="tw-absolute tw-right-0">
                <Button
                  variant={BtnVariantEnum.TEXTICON}
                  icon={faHeart}
                  onClick={() => console.log("wishlist")}
                  iconClassName="hover:tw-text-primary tw-text-2xl"
                />
              </span>
              <img
                src={images[0].url}
                onError={({ currentTarget }) => {
                  currentTarget.src = "images/branding/logo.svg"
                }}
                className="tw-w-full tw-object-cover tw-object-center"
              />
            </div>
            <div className="tw-prod-title tw-mt-4">
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
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-text-gray-900 md:tw-flex-row">
              <p className="tw-text-xl tw-font-bold">€ {price}</p>
              <Button variant={BtnVariantEnum.FULL} text="Add to cart" onClick={() => console.log(id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
