import { faHeart } from "@fortawesome/free-solid-svg-icons"

import Button from "../Button"
import { BtnVariantEnum } from "../Button/types"

import { CardProps } from "./types"

function Card({ id, title, subtitle, description, image, price }: CardProps) {
  return (
    <div className="tw-flex tw-w-80 tw-items-center tw-justify-center">
      <div className="tw-w-full tw-p-4">
        <div className="tw-card tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-bg-white tw-p-10 tw-shadow-2xl">
          <div className="tw-prod-title">
            <p className="tw-text-2xl tw-font-bold tw-uppercase tw-text-gray-900">{title} </p>
            <p className="tw-text-sm tw-uppercase tw-text-gray-400">{subtitle}</p>
          </div>
          <div className="tw-prod-img tw-relative">
            <span className="tw-absolute tw-right-0">
              <Button
                variant={BtnVariantEnum.TEXTICON}
                icon={faHeart}
                onClick={() => console.log("wishlist")}
                iconClassName="hover:tw-text-primary"
                iconSize="2x"
              />
            </span>
            <img
              src={image}
              onError={({ currentTarget }) => {
                currentTarget.src = "images/branding/logo.svg"
              }}
              className="tw-w-full tw-object-cover tw-object-center"
            />
          </div>
          <div className="tw-prod-info tw-grid tw-gap-10">
            <p>{description}</p>
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
