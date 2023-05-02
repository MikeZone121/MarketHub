import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Hyperlink from "../Atoms/HyperLink"
import Title from "../Atoms/Title"
import { TitleSizeEnum } from "../Atoms/Title/types"
import Text from "../Atoms/Text"
import { TextVariantEnum } from "../Atoms/Text/types"
import Button from "../Atoms/Button"
import { Navigate } from "react-router-dom"
import { BtnVariantEnum } from "../Atoms/Button/types"

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
      image: "images/branding/logo.svg",
      name: "JBL music speaker",
      description: "",
      label: "Weekend discount",
      price: 270,
      salePrice: 350,
      url: "/shop"
    },
    {
      image: "images/branding/logo.svg",
      name: "Apple Airpods Pro",
      description: "",
      label: "Weekend discount",
      price: 249,
      salePrice: 260,
      url: "/shop"
    }
  ]
  return (
    <section className="tw-mb-24 tw-flex tw-w-11/12 tw-max-w-screen-xl tw-flex-col tw-gap-2 md:tw-flex-row md:tw-gap-8">
      <article className="tw-bg-gray-100 md:tw-w-96">
        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-5 tw-bg-primary tw-p-4">
          <FontAwesomeIcon icon={faBars} color="white" className="tw-text-2xl" />
          <Title text="Browse categories" size={TitleSizeEnum.H5} className="!tw-mb-0 tw-p-0 tw-text-white" />
        </div>
        <ul className="tw-flex tw-flex-col tw-space-y-4 tw-p-4">
          <Hyperlink text="Cell Phones" />
          <Hyperlink text="Computer & accessories" />
          <Hyperlink text="Television & video" />
          <Hyperlink text="Smartwatches" />
        </ul>
      </article>

      <section className="tw-flex tw-w-full tw-flex-col ">
        <section className="tw-mb-4 tw-flex tw-w-full tw-items-end tw-justify-end ">
          <ul className="tw-hidden tw-space-x-6 md:tw-flex">
            <Hyperlink text="Home" />
            <Hyperlink text="Today deals" />
            <Hyperlink text="Trending products" />
            <Hyperlink text="Special offers" />
          </ul>
        </section>
        <section className="tw-flex tw-w-full tw-flex-col tw-gap-6 md:tw-flex-row">
          <article className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-bg-gray-100 tw-p-10 md:tw-w-2/3 lg:tw-flex-row">
            <div className="">
              <Text text={items?.[0].label} variant={TextVariantEnum.SMALL} />
              <Title text={items?.[0].name} size={TitleSizeEnum.H3} />
              <Text text={items?.[0].description} variant={TextVariantEnum.QUOTE} className="tw-mt-2" />
              <Button
                onClick={() => Navigate({ to: items?.[0].url })}
                text="SHOP NOW"
                variant={BtnVariantEnum.FULL}
                className="tw-mt-6"
              />
            </div>
            <div className="tw-w-64">
              <img
                src={items?.[0].image}
                onError={({ currentTarget }) => {
                  currentTarget.src = "images/branding/logo.svg"
                }}
                className="tw-w-full tw-object-contain tw-object-center"
              />
            </div>
          </article>
          <div className="tw-relative tw-flex tw-grow tw-flex-col tw-gap-6">
            <article className="tw-flex tw-h-full tw-w-full tw-bg-gray-100">
              <img
                src={"images/branding/logo.svg"}
                onError={({ currentTarget }) => {
                  currentTarget.src = "images/branding/logo.svg"
                }}
                className="tw-w-full tw-object-contain tw-object-center"
              />
            </article>
            <article className="tw-relative tw-flex tw-h-full tw-w-full tw-bg-gray-100">
              <img
                src={"images/branding/logo.svg"}
                onError={({ currentTarget }) => {
                  currentTarget.src = "images/branding/logo.svg"
                }}
                className="tw-w-full tw-object-contain tw-object-center"
              />
            </article>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Hero
