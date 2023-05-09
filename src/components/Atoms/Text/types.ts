import { ReactNode } from "react"

export interface TextProps {
  text?: string
  variant?: TextVariantEnum
  className?: string
  children?: ReactNode
}

export enum TextVariantEnum {
  SMALL = "small",
  NORMAL = "normal",
  QUOTE = "quote",
  LEAD = "lead"
}
