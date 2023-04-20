import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import { BtnVariantEnum, PositionEnum } from "./components/Button/types";
import "./styles/global.css";

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
    </div>
  );
}

export default App;
