import { useNavigate } from "react-router-dom"
import clsx from "clsx"

import { ProductModel } from "../../services/types"
import Button from "../Atoms/Button"
import { BtnVariantEnum } from "../Atoms/Button/types"
import Hyperlink from "../Atoms/HyperLink"
import Text from "../Atoms/Text"
import { TextVariantEnum } from "../Atoms/Text/types"
import Title from "../Atoms/Title"
import { TitleSizeEnum } from "../Atoms/Title/types"

function Hero({ items, isLoading }: { items?: ProductModel[]; isLoading: boolean }) {
  const navigate = useNavigate()
  return (
    <section className="tw-mb-12 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-gap-8">
      <article className="tw-bg-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out lg:tw-w-96">
        <div className="tw-flex tw-items-center  tw-space-x-5 tw-bg-primary tw-px-4 tw-py-3">
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
            onClick={() => navigate(`/shop/${items?.[0].slug ?? ""} `)}
            className={clsx(
              isLoading && "tw-h-full tw-animate-pulse tw-bg-gray-200",
              "tw-group tw-flex tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-bg-gray-100 tw-px-10 tw-py-6 tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-gray-200 hover:tw-shadow-sm active:tw-scale-90 md:tw-w-2/3 xl:tw-flex-row"
            )}
          >
            {items && (
              <>
                <div>
                  <Text
                    text={items?.[0].categories?.[0].name}
                    variant={TextVariantEnum.SMALL}
                    className="tw-font-extralight tw-uppercase tw-tracking-widest"
                  />
                  <Title text={items?.[0].name} size={TitleSizeEnum.H3} />
                  <Text text={items?.[0].description} variant={TextVariantEnum.QUOTE} className="tw-mt-2" />
                  <p className="tw-mt-2 tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-3xl tw-font-bold tw-text-primary">
                    € {items?.[0].salePrice ? items?.[0].salePrice : items?.[0].price}
                    {items?.[0].salePrice && (
                      <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                        € {items?.[0].price}
                      </span>
                    )}
                  </p>
                  <Button
                    onClick={() => navigate(`/shop/${items?.[0].slug ?? ""} `)}
                    text="SHOP NOW"
                    variant={BtnVariantEnum.FULL}
                    className="tw-mt-6"
                  />
                </div>
                <div className="tw-mt-10 tw-w-full tw-max-w-xs xl:tw-mt-0">
                  <img
                    src={items?.[0].images?.[0].url}
                    onError={({ currentTarget }) => {
                      currentTarget.src = "images/branding/logo.svg"
                    }}
                    alt={items?.[0].images?.[0].fileName}
                    className="tw-w-full tw-object-contain tw-object-center tw-transition-all tw-duration-200 group-hover:tw-scale-105"
                  />
                </div>
              </>
            )}
          </article>
          <div className="tw-relative tw-flex tw-grow tw-flex-col tw-gap-6">
            {/* PRODUCT 2 */}
            <article
              onClick={() => navigate(`/shop/${items?.[1].slug ?? ""} `)}
              className={clsx(
                isLoading && "tw-h-56 tw-animate-pulse tw-bg-gray-200",
                "tw-group tw-flex tw-h-full tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-justify-between tw-gap-2 tw-bg-gray-100 tw-px-10 tw-py-6 tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-gray-200 hover:tw-shadow-sm active:tw-scale-90 lg:tw-flex-row lg:tw-items-stretch"
              )}
            >
              {items && (
                <>
                  <div className="tw-flex tw-flex-col tw-justify-center">
                    <Title text={items?.[1].name} size={TitleSizeEnum.H3} />
                    <div className="tw-mt-4">
                      <Text
                        text={items?.[1].categories?.[0].name}
                        variant={TextVariantEnum.SMALL}
                        className="tw-font-extralight tw-uppercase tw-tracking-widest"
                      />
                      <p className="tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-3xl tw-font-bold tw-text-primary">
                        € {items?.[1].salePrice ? items?.[1].salePrice : items?.[1].price}
                        {items?.[1].salePrice && (
                          <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                            € {items?.[1].price}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="tw-mt-4 tw-flex  tw-w-1/2 tw-max-w-xs tw-justify-center lg:tw-mt-0">
                    <img
                      src={items?.[1].images?.[0].url}
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
              onClick={() => navigate(`/shop/${items?.[2].slug ?? ""} `)}
              className={clsx(
                isLoading && "tw-h-56 tw-animate-pulse tw-bg-gray-200",
                "tw-group tw-flex tw-h-full tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-justify-between tw-gap-2 tw-bg-gray-100 tw-px-10 tw-py-6 tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-gray-200 hover:tw-shadow-sm active:tw-scale-90 lg:tw-flex-row lg:tw-items-stretch"
              )}
            >
              {items && (
                <>
                  <div className="tw-flex tw-flex-col tw-justify-center">
                    <Title text={items?.[2].name} size={TitleSizeEnum.H3} />
                    <div className="tw-mt-4">
                      <Text
                        text={items?.[2].categories?.[0].name}
                        variant={TextVariantEnum.SMALL}
                        className="tw-font-extralight tw-uppercase tw-tracking-widest"
                      />
                      <p className="tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-3xl tw-font-bold tw-text-primary">
                        € {items?.[2].salePrice ? items?.[2].salePrice : items?.[2].price}
                        {items?.[2].salePrice && (
                          <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                            € {items?.[2].price}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="tw-mt-4 tw-flex  tw-w-1/2 tw-max-w-xs tw-justify-center lg:tw-mt-0">
                    <img
                      src={items?.[2].images?.[0].url}
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
