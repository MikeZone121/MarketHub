import { Navigate } from "react-router-dom"

import Button from "../Atoms/Button"
import { BtnVariantEnum } from "../Atoms/Button/types"
import Hyperlink from "../Atoms/HyperLink"
import Text from "../Atoms/Text"
import { TextVariantEnum } from "../Atoms/Text/types"
import Title from "../Atoms/Title"
import { TitleSizeEnum } from "../Atoms/Title/types"

function Hero() {
  const items = [
    {
      image:
        "https://www.kamera-express.be/media/51c551c8-33be-41f1-9f49-c687e4c969a1/fujifilm-instax-square-sq1-chalk-white.jpg",
      name: "Polaroid instant camera",
      description: "Save and shoot straight from the box with three packs of iconic Polaroid.",
      label: "Summer SALE UP TO 70%",
      price: 354,
      url: "/shop"
    },
    {
      image:
        "https://be.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw9652df42/JBL_CHARGE5_HERO_BLACK_0046_x1.png?sw=680&sh=680",
      name: "JBL music speaker",
      description: "",
      label: "Weekend discount",
      price: 270,
      salePrice: 350,
      url: "/shop"
    },
    {
      image:
        "https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/nl_NL/8502c82d6af341b14307f5c11374bbb6.png",
      name: "Apple Airpods Pro",
      description: "",
      label: "Weekend discount",
      price: 249,
      salePrice: 260,
      url: "/shop"
    }
  ]
  return (
    <section className="tw-mb-24 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-gap-8">
      <article className="tw-bg-gray-100 lg:tw-w-96">
        <div className="tw-flex tw-items-center  tw-space-x-5 tw-bg-primary tw-px-4 tw-py-3">
          <Title text="Browse categories" size={TitleSizeEnum.H5} className="!tw-mb-0 tw-p-0 tw-text-white" />
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
          <article className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-bg-gray-100 tw-p-10 md:tw-w-2/3 xl:tw-flex-row">
            <div>
              <Text
                text={items?.[0].label}
                variant={TextVariantEnum.SMALL}
                className="tw-font-extralight tw-uppercase tw-tracking-widest"
              />
              <Title text={items?.[0].name} size={TitleSizeEnum.H3} />
              <Text text={items?.[0].description} variant={TextVariantEnum.QUOTE} className="tw-mt-2" />
              <Button
                onClick={() => Navigate({ to: items?.[0].url })}
                text="SHOP NOW"
                variant={BtnVariantEnum.FULL}
                className="tw-mt-6"
              />
            </div>
            <div className="tw-mt-4 tw-w-1/2 tw-max-w-xs lg:tw-mt-0">
              <img
                src={items?.[0].image}
                onError={({ currentTarget }) => {
                  currentTarget.src = "images/branding/logo.svg"
                }}
                className="tw-w-full tw-object-contain tw-object-center tw-transition-all tw-duration-200 hover:tw-scale-105"
              />
            </div>
          </article>
          <div className="tw-relative tw-flex tw-grow tw-flex-col tw-gap-6">
            <article className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-gap-2 tw-bg-gray-100 tw-p-10  lg:tw-flex-row lg:tw-items-stretch">
              <div className="tw-flex tw-flex-col tw-justify-between">
                <Title text={items?.[1].name} size={TitleSizeEnum.H3} />
                <div>
                  <Text
                    text={items?.[1].label}
                    variant={TextVariantEnum.SMALL}
                    className="tw-font-extralight tw-uppercase tw-tracking-widest"
                  />
                  <p className="tw-flex tw-items-center tw-gap-4 tw-text-3xl tw-font-bold tw-text-primary">
                    € {items?.[1].price}{" "}
                    {items?.[1].salePrice && (
                      <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                        € {items?.[1].salePrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="tw-mt-4 tw-w-1/2 tw-max-w-xs lg:tw-mt-0">
                <img
                  src={items?.[1].image}
                  onError={({ currentTarget }) => {
                    currentTarget.src = "images/branding/logo.svg"
                  }}
                  className="tw-w-full tw-object-contain tw-object-center tw-transition-all tw-duration-200 hover:tw-scale-105"
                />
              </div>
            </article>
            <article className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-gap-2 tw-bg-gray-100 tw-p-10 lg:tw-flex-row lg:tw-items-stretch">
              <div className="tw-flex tw-flex-col tw-justify-between">
                <Title text={items?.[2].name} size={TitleSizeEnum.H3} />
                <div>
                  <Text
                    text={items?.[2].label}
                    variant={TextVariantEnum.SMALL}
                    className="tw-font-extralight tw-uppercase tw-tracking-widest"
                  />
                  <p className="tw-flex tw-items-center tw-gap-4 tw-text-3xl tw-font-bold tw-text-primary">
                    € {items?.[2].price}{" "}
                    <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                      € {items?.[2].salePrice}
                    </span>
                  </p>
                </div>
              </div>
              <div className="tw-mt-4 tw-w-1/2 tw-max-w-xs lg:tw-mt-0">
                <img
                  src={items?.[2].image}
                  onError={({ currentTarget }) => {
                    currentTarget.src = "images/branding/logo.svg"
                  }}
                  className="tw-w-full tw-object-contain tw-object-center tw-transition-all tw-duration-200 hover:tw-scale-105"
                />
              </div>
            </article>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Hero
