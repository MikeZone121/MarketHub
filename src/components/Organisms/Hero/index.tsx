import { useNavigate } from "react-router-dom"
import clsx from "clsx"

import { ProductModel } from "../../../services/types"
import Button from "../../Atoms/Button"
import { BtnVariantEnum } from "../../Atoms/Button/types"
import Hyperlink from "../../Atoms/HyperLink"
import Text from "../../Atoms/Text"
import { TextVariantEnum } from "../../Atoms/Text/types"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"

function Hero({ products, isLoading }: { products?: ProductModel[]; isLoading: boolean }) {
  const navigate = useNavigate()
  console.log(products)

  const [firstProduct, secondProduct, thirdProduct] = products ?? []
  return (
    <section className="tw-mb-12 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-gap-8">
      <article className="tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out lg:tw-w-96">
        <div className="tw-flex tw-items-center  tw-space-x-5  tw-bg-primary tw-px-4 tw-py-3">
          <Title text="Browse categories" size={TitleSizeEnum.H6} className="!tw-mb-0 tw-p-0 tw-text-white" />
        </div>
        <ul className="tw-flex tw-flex-col">
          <li className="tw-border-b tw-px-4 tw-py-2 tw-transition-all tw-duration-200 tw-ease-in hover:tw-bg-gray-200">
            <Hyperlink href="" text="Cell Phones" />
          </li>
          <li className="tw-border-b tw-px-4 tw-py-2 tw-transition-all tw-duration-200 tw-ease-in hover:tw-bg-gray-200">
            <Hyperlink href="" text="Computer & accessories" />
          </li>
          <li className="tw-border-b tw-px-4 tw-py-2 tw-transition-all tw-duration-200 tw-ease-in hover:tw-bg-gray-200">
            <Hyperlink href="" text="Television & video" />
          </li>
          <li className="tw-px-4 tw-py-2 tw-transition-all tw-duration-200 tw-ease-in hover:tw-bg-gray-200">
            <Hyperlink href="" text="Smartwatches" />
          </li>
        </ul>
      </article>

      <section className="tw-flex tw-w-full tw-flex-col ">
        <section className=" tw-flex tw-w-full tw-items-end tw-justify-end ">
          <ul className="tw-hidden tw-space-x-6 tw-py-3 lg:tw-flex">
            <li className="tw-transition-all tw-duration-200 tw-ease-in hover:tw-text-primary">
              <Hyperlink href="/" text="Home" />
            </li>
            <li className="tw-transition-all tw-duration-200 tw-ease-in hover:tw-text-primary">
              <Hyperlink href="" text="Today deals" />
            </li>
            <li className="tw-transition-all tw-duration-200 tw-ease-in hover:tw-text-primary">
              <Hyperlink href="" text="Trending products" />
            </li>
            <li className="tw-transition-all tw-duration-200 tw-ease-in hover:tw-text-primary">
              <Hyperlink href="" text="Special offers" />
            </li>
          </ul>
        </section>
        <section className="tw-flex tw-w-full tw-flex-col tw-gap-6 md:tw-flex-row">
          {/* PRODUCT 1 */}
          <article
            onClick={() => navigate(`/shop/${firstProduct?.slug ?? ""} `)}
            className={clsx(
              isLoading && "tw-h-full tw-animate-pulse tw-bg-gray-200",
              "tw-group tw-flex tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center tw-gap-4 tw-rounded-lg tw-border tw-border-gray-100 tw-px-10 tw-py-6 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out  hover:tw-shadow-sm  lg:active:tw-scale-90 xl:tw-flex-row"
            )}
          >
            {products && (
              <>
                <div>
                  {firstProduct?.categories && (
                    <Text
                      text={firstProduct?.categories?.[0].name}
                      variant={TextVariantEnum.SMALL}
                      className="tw-font-extralight tw-uppercase tw-tracking-widest tw-text-gray-400"
                    />
                  )}
                  <Title text={firstProduct?.name} size={TitleSizeEnum.H4} className="!tw-text-gray-600" />
                  <Text text={firstProduct?.description} variant={TextVariantEnum.QUOTE} className="tw-mt-2" />
                  <p className="tw-mt-2 tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-xl tw-font-bold tw-text-primary">
                    € {firstProduct?.salePrice ? firstProduct?.salePrice : firstProduct?.price}
                    {firstProduct?.salePrice && (
                      <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                        € {firstProduct?.price}
                      </span>
                    )}
                  </p>
                  <Button
                    onClick={() => navigate(`/shop/${firstProduct?.slug ?? ""} `)}
                    text="SHOP NOW"
                    variant={BtnVariantEnum.FULL}
                    className="tw-mt-6"
                  />
                </div>
                <div className="tw-mt-10 tw-w-full tw-max-w-xs xl:tw-mt-0">
                  <img
                    src={firstProduct?.images?.[0].url}
                    onError={({ currentTarget }) => {
                      currentTarget.src = "images/branding/logo.svg"
                    }}
                    alt={firstProduct?.images?.[0].fileName}
                    className="tw-w-full tw-object-contain tw-object-center tw-transition-all tw-duration-200 group-hover:tw-scale-105"
                  />
                </div>
              </>
            )}
          </article>
          <div className="tw-relative tw-hidden tw-grow tw-flex-col tw-gap-6 lg:tw-flex">
            {/* PRODUCT 2 */}
            <article
              onClick={() => navigate(`/shop/${secondProduct?.slug ?? ""} `)}
              className={clsx(
                isLoading && "tw-h-56 tw-animate-pulse tw-bg-gray-200",
                "hover:tw-bg-gray-00 tw-group tw-flex tw-h-full tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-justify-between tw-gap-2  tw-rounded-lg tw-border tw-border-gray-100 tw-px-10 tw-py-6 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-shadow-sm lg:tw-flex-row lg:tw-items-stretch lg:active:tw-scale-90"
              )}
            >
              {products && (
                <>
                  <div className="tw-flex tw-flex-col tw-justify-center">
                    {secondProduct?.categories && (
                      <Text
                        text={secondProduct?.categories?.[0].name}
                        variant={TextVariantEnum.SMALL}
                        className="tw-font-extralight tw-uppercase tw-tracking-widest tw-text-gray-400"
                      />
                    )}
                    <Title text={secondProduct?.name} size={TitleSizeEnum.H4} className="!tw-text-gray-600" />
                    <p className="tw-mt-2 tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-xl tw-font-bold tw-text-primary">
                      € {secondProduct?.salePrice ? secondProduct?.salePrice : secondProduct?.price}
                      {secondProduct?.salePrice && (
                        <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                          € {secondProduct?.price}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="tw-mt-4 tw-flex  tw-w-1/2 tw-max-w-xs tw-justify-center lg:tw-mt-0">
                    <img
                      src={secondProduct?.images?.[0].url}
                      onError={({ currentTarget }) => {
                        currentTarget.src = "images/branding/logo.svg"
                      }}
                      className="tw-w-full tw-object-contain tw-object-center tw-transition-all tw-duration-200 group-hover:tw-scale-105"
                    />
                  </div>
                </>
              )}
            </article>
            {/* PRODUCT 3 */}
            <article
              onClick={() => navigate(`/shop/${thirdProduct?.slug ?? ""} `)}
              className={clsx(
                isLoading && "tw-h-56 tw-animate-pulse tw-bg-gray-200",
                "tw-group tw-flex tw-h-full tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-justify-between tw-gap-2 tw-rounded-lg tw-border tw-border-gray-100  tw-px-10 tw-py-6 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out  hover:tw-shadow-sm lg:tw-flex-row lg:tw-items-stretch lg:active:tw-scale-90"
              )}
            >
              {products && (
                <>
                  <div className="tw-flex tw-flex-col tw-justify-center">
                    {thirdProduct?.categories && (
                      <Text
                        text={thirdProduct?.categories?.[0].name}
                        variant={TextVariantEnum.SMALL}
                        className="tw-font-extralight tw-uppercase tw-tracking-widest tw-text-gray-400"
                      />
                    )}
                    <Title text={thirdProduct?.name} size={TitleSizeEnum.H4} className="!tw-text-gray-600" />
                    <p className="tw-mt-2 tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-xl tw-font-bold tw-text-primary">
                      € {thirdProduct?.salePrice ? thirdProduct?.salePrice : thirdProduct?.price}
                      {thirdProduct?.salePrice && (
                        <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                          € {thirdProduct?.price}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="tw-mt-4 tw-flex  tw-w-1/2 tw-max-w-xs tw-justify-center lg:tw-mt-0">
                    <img
                      src={thirdProduct?.images?.[0].url}
                      onError={({ currentTarget }) => {
                        currentTarget.src = "images/branding/logo.svg"
                      }}
                      className="tw-w-full tw-object-contain tw-object-center tw-transition-all tw-duration-200 group-hover:tw-scale-105"
                    />
                  </div>
                </>
              )}
            </article>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Hero
