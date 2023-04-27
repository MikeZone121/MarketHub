import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Hyperlink from "../HyperLink"
import Title from "../Title"
import { TitleSizeEnum } from "../Title/types"

function Hero() {
  return (
    <section className="tw-mb-24 tw-flex tw-w-full tw-max-w-[90%] tw-gap-8">
      <article className="tw-w-96 tw-bg-gray-100">
        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-5 tw-bg-primary tw-p-4">
          <FontAwesomeIcon icon={faBars} color="white" className="tw-text-2xl" />
          <Title text="Browse categories" size={TitleSizeEnum.H5} className="!tw-mb-0 tw-p-0 tw-text-white" />
        </div>
        <ul className="tw-flex tw-flex-col tw-space-y-4  tw-p-4">
          <Hyperlink text="Cell Phones" />
          <Hyperlink text="Computer & accessories" />
          <Hyperlink text="Television & video" />
          <Hyperlink text="Smartwatches" />
        </ul>
      </article>

      <section className="tw-flex tw-w-full tw-flex-col tw-border-t tw-border-gray-100">
        <section className="tw-mb-4 tw-flex tw-w-full tw-items-end tw-justify-end tw-pt-4">
          <ul className="tw-flex tw-space-x-6 ">
            <Hyperlink text="Home" />
            <Hyperlink text="Today deals" />
            <Hyperlink text="Trending products" />
            <Hyperlink text="Special offers" />
          </ul>
        </section>
        <section className="tw-flex tw-w-full tw-gap-4">
          <article className="tw-flex tw-w-2/3 tw-justify-center tw-bg-gray-100">
            <img
              src={"images/branding/logo.svg"}
              onError={({ currentTarget }) => {
                currentTarget.src = "images/branding/logo.svg"
              }}
              className="tw-w-full tw-object-contain tw-object-center"
            />
          </article>
          <div className="tw-relative tw-flex tw-grow tw-flex-col tw-gap-6">
            <article className=" tw-flex tw-w-full tw-bg-gray-100">
              <img
                src={"images/branding/logo.svg"}
                onError={({ currentTarget }) => {
                  currentTarget.src = "images/branding/logo.svg"
                }}
                className="tw-w-full tw-object-contain tw-object-center"
              />
            </article>
            <article className="tw-relative tw-flex tw-w-full tw-bg-gray-100">
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
