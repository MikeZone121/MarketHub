import { useState } from "react"
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons"

import Button from "./components/Button"
import { BtnVariantEnum, PositionEnum } from "./components/Button/types"
import HyperLink from "./components/HyperLink"
import InputField from "./components/InputField"
import { InputFieldTypesEnum } from "./components/InputField/types"
import Text from "./components/Text"
import { TextVariantEnum } from "./components/Text/types"
import Title from "./components/Title"
import { TitleSizeEnum } from "./components/Title/types"

import "./styles/global.css"

function App() {
  const [val, setVal] = useState("")

  return (
    <div className="App">
      <div className="tw-my-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
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
      </div>
      <Title size={TitleSizeEnum.H1} text="Dit is een titel h1" />
      <Title size={TitleSizeEnum.H2} text="Dit is een titel h2" />
      <Title size={TitleSizeEnum.H3} text="Dit is een titel h3" />
      <Title size={TitleSizeEnum.H4} text="Dit is een titel h4" />
      <Title size={TitleSizeEnum.H5} text="Dit is een titel h5" />

      <Text variant={TextVariantEnum.SMALL} text="Dit is smalle tekst" />
      <Text variant={TextVariantEnum.NORMAL} text="Dit is smalle tekst" />
      <Text variant={TextVariantEnum.QUOTE} text="Dit is smalle tekst" />
      <Text variant={TextVariantEnum.LEAD} text="Dit is smalle tekst" />

      <HyperLink href="https://www.google.com" className="nav-animation" text="Navlink" />
      <br />
      <HyperLink href="https://www.google.com" className="tw-underline" text="Normale link" />
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
    </div>
  )
}

export default App
