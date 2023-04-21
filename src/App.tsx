import { useState } from "react";
import HyperLink from "./components/HyperLink";
import InputField from "./components/InputField";
import Text from "./components/Text";
import Title from "./components/Title";
import "./styles/global.css";
import { InputFieldTypesEnum } from "./components/InputField/types";
import { TextVariantEnum } from "./components/Text/types";
import { TitleSizeEnum } from "./components/Title/types";

function App() {
  const [val, setVal] = useState("");
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  return (
    <div className="App">
      <Title size={TitleSizeEnum.H1} text="Dit is een titel h1" />
      <Title size={TitleSizeEnum.H2} text="Dit is een titel h2" />
      <Title size={TitleSizeEnum.H3} text="Dit is een titel h3" />
      <Title size={TitleSizeEnum.H4} text="Dit is een titel h4" />
      <Title size={TitleSizeEnum.H5} text="Dit is een titel h5" />

      <Text variant={TextVariantEnum.SMALL} text="Dit is smalle tekst" />
      <Text variant={TextVariantEnum.NORMAL} text="Dit is smalle tekst" />
      <Text variant={TextVariantEnum.QUOTE} text="Dit is smalle tekst" />
      <Text variant={TextVariantEnum.LEAD} text="Dit is smalle tekst" />

      <HyperLink
        href="https://www.google.com"
        className="nav-animation"
        text="Navlink"
      />
      <br />
      <HyperLink
        href="https://www.google.com"
        className="tw-underline"
        text="Normale link"
      />

      <InputField
        onChange={change}
        id="test"
        name="Name"
        label="Labeltext"
        value={val}
        type={InputFieldTypesEnum.TEXT}
        placeholder="Placeholder"
      />
    </div>
  );
}

export default App;
