import { MouseEvent } from "react"
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core"

export interface ButtonProps {
  text?: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  iconPosition?: PositionEnum
  className?: string
  iconClassName?: string
  icon?: IconProp
  iconSize?: SizeProp
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
