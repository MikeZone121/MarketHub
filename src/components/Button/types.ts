import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface ButtonProps {
  text?: string
  onClick: () => void
  iconPosition?: PositionEnum
  classNames?: string
  icon?: IconProp
  variant?: BtnVariantEnum
  isFullWidth?: boolean
  isDisabled?: boolean
  isLoading?: boolean
}

export enum PositionEnum {
  LEFT = "left",
  RIGHT = "right",
  BOTTOM = "bottom",
  TOP = "top"
}

export enum BtnVariantEnum {
  FULL = "full",
  TEXTICON = "text-icon",
  OUTLINED = "outlined",
  INVERT = "invert"
}
