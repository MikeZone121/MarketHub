export interface TextProps {
  text?: string
  variant?: TextVariantEnum
  className?: string
}

export enum TextVariantEnum {
  SMALL = "small",
  NORMAL = "normal",
  QUOTE = "quote",
  LEAD = "lead"
}
