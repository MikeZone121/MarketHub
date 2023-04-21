import { faCoffee } from "@fortawesome/free-solid-svg-icons"

import Button from "./components/Button"
import { BtnVariantEnum, PositionEnum } from "./components/Button/types"
import HyperLink from "./components/HyperLink"
import Text from "./components/Text"
import Title from "./components/Title"

import "./styles/global.css"

function App() {
  return (
    <div className="App">
      <div className="tw-space-x-2 tw-items-center tw-flex tw-justify-center tw-my-4">
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
      <Title size="h1" text="Dit is een titel h1" />
      <Title size="h2" text="Dit is een titel h2" />
      <Title size="h3" text="Dit is een titel h3" />
      <Title size="h4" text="Dit is een titel h4" />
      <Title size="h5" text="Dit is een titel h5" />

      <Text variant="small" text="Dit is smalle tekst" />
      <Text variant="normal" text="Dit is smalle tekst" />
      <Text variant="quote" text="Dit is smalle tekst" />
      <Text variant="lead" text="Dit is smalle tekst" />

      <HyperLink href="https://www.google.com" className="nav-animation" text="Navlink" />
      <br />
      <HyperLink href="https://www.google.com" className="tw-underline" text="Normale link" />
    </div>
  )
}

export default App
