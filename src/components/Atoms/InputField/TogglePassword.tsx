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
      classNames="tw-absolute tw-top-0 tw-right-0 tw-border-0 tw-px-0 hover:tw-shadow-none hover:tw-border-0 hover:tw-bg-transparent"
      variant={BtnVariantEnum.TEXTICON}
    />
  )
}

export default TogglePassword
