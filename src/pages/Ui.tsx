import React, { useState } from "react"
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons"

import Card from "../components/Card"
import Button from "../components/Atoms/Button"
import { BtnVariantEnum, PositionEnum } from "../components/Atoms/Button/types"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import { TextVariantEnum } from "../components/Atoms/Text/types"
import Text from "../components/Atoms/Text"
import { InputFieldTypesEnum } from "../components/Atoms/InputField/types"
import InputField from "../components/Atoms/InputField"
import Hyperlink from "../components/Atoms/HyperLink"
import Title from "../components/Atoms/Title"
import Hero from "../components/Hero"

function UI() {
  const [val, setVal] = useState("")
  return (
    <section className="tw-my-10">
      <article className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-space-x-5">
        <Hero />
      </article>
      <article className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-space-x-5">
        <Button
          onClick={() => null}
          text="Button"
          iconPosition={PositionEnum.LEFT}
          variant={BtnVariantEnum.FULL}
          icon={faCoffee}
        />
        <Button
          onClick={() => null}
          text="Button"
          iconPosition={PositionEnum.RIGHT}
          variant={BtnVariantEnum.INVERT}
          icon={faCoffee}
        />
        <Button
          onClick={() => null}
          text="Button"
          isLoading
          iconPosition={PositionEnum.TOP}
          variant={BtnVariantEnum.OUTLINED}
          icon={faCoffee}
        />
        <Button
          onClick={() => null}
          text="Button"
          isLoading
          iconPosition={PositionEnum.BOTTOM}
          variant={BtnVariantEnum.TEXTICON}
          icon={faCoffee}
        />
      </article>
      <hr className="tw-my-10"></hr>
      <article className="tw-flex  tw-flex-wrap tw-items-center tw-justify-center tw-space-x-5">
        <Title size={TitleSizeEnum.H1} text="Dit is een titel h1" />
        <Title size={TitleSizeEnum.H2} text="Dit is een titel h2" />
        <Title size={TitleSizeEnum.H3} text="Dit is een titel h3" />
        <Title size={TitleSizeEnum.H4} text="Dit is een titel h4" />
        <Title size={TitleSizeEnum.H5} text="Dit is een titel h5" />
      </article>
      <hr className="tw-my-10"></hr>
      <article className="tw-flex  tw-flex-wrap tw-items-center tw-justify-center tw-space-x-5">
        <Text variant={TextVariantEnum.SMALL} text="Dit is smalle tekst" />
        <Text variant={TextVariantEnum.NORMAL} text="Dit is normale tekst" />
        <Text variant={TextVariantEnum.QUOTE} text="Dit is quote tekst" />
        <Text variant={TextVariantEnum.LEAD} text="Dit is lead tekst" />
      </article>
      <hr className="tw-my-10"></hr>{" "}
      <article className="tw-flex  tw-flex-wrap tw-justify-center tw-space-x-5">
        <Hyperlink href="https://www.google.com" className="nav-animation" text="Navlink" />
        <br />
        <Hyperlink href="https://www.google.com" className="tw-underline" text="Normale link" />
      </article>
      <hr className="tw-my-10"></hr>
      <article className="tw-flex  tw-flex-wrap tw-justify-center tw-space-x-5">
        <div className="tw-mt-10">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
            id="test"
            name="Name"
            label="Password"
            value={val}
            type={InputFieldTypesEnum.PASSWORD}
          />
        </div>

        <div className="tw-mt-10">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
            id="test"
            name="Name"
            label="Search..."
            value={val}
            type={InputFieldTypesEnum.TEXT}
            icon={faSearch}
            onClick={() => alert("Clicked")}
          />
        </div>

        <div className="tw-mt-10">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
            id="test"
            name="Name"
            label="Firstname"
            value={val}
            type={InputFieldTypesEnum.TEXT}
          />
        </div>

        <div className="tw-mt-10">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
            id="test"
            name="tem"
            label="Tel"
            value={val}
            type={InputFieldTypesEnum.TEL}
          />
        </div>

        <div className="tw-mt-10">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
            id="test"
            name="Name"
            value={val}
            label=""
            type={InputFieldTypesEnum.DATE}
            error={{ message: "Foute datum" }}
          />
        </div>
      </article>
      <hr className="tw-my-10"></hr>
      <article className="tw-flex  tw-flex-wrap tw-items-center tw-justify-center tw-space-x-5">
        <div className="tw-m-auto tw-mx-auto tw-grid tw-max-w-4xl tw-grid-cols-1 tw-place-items-center tw-items-center tw-justify-items-center tw-gap-0 md:tw-auto-cols-min md:tw-grid-cols-2 lg:tw-grid-cols-3 lg:tw-gap-24	">
          <Card
            image="images/branding/safari-pinned-tab.svg"
            title="Test product"
            subtitle="test subtitle"
            description="hello this is a test"
            price="55"
            id="1"
          />
          <Card
            image="images/branding/safari-pinned-tab.svg"
            title="Test product"
            subtitle="test subtitle"
            description="hello this is a test"
            price="55"
            id="2"
          />
          <Card
            image="images/branding/safari-pinned-tab.svg"
            title="Test product"
            subtitle="test subtitle"
            description="hello this is a test"
            price="55"
            id="3"
          />
        </div>
      </article>
    </section>
  )
}

export default UI
