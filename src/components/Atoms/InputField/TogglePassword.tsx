import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

import Button from "../Button"
import { BtnVariantEnum } from "../Button/types"

import { InputFieldTypesEnum } from "./types"

function TogglePassword({
  onClick,
  type,
  isDisabled
}: {
  onClick: () => void
  type: InputFieldTypesEnum
  isDisabled?: boolean
}) {
  return (
    <Button
      isDisabled={isDisabled}
      onClick={onClick}
      icon={type === InputFieldTypesEnum.TEXT ? faEye : faEyeSlash}
      className="tw-absolute tw-right-0 tw-top-0 tw-border-0 tw-px-0 hover:tw-border-0 hover:tw-bg-transparent hover:tw-shadow-none"
      variant={BtnVariantEnum.TEXTICON}
    />
  )
}

export default TogglePassword
