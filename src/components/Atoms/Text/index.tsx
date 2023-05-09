import { clsx } from "clsx"

import { TextProps, TextVariantEnum } from "./types"

function Text({ text, variant = TextVariantEnum.NORMAL, className, children }: TextProps) {
  const textClassName = clsx(
    variant === TextVariantEnum.SMALL && "tw-mt-0 tw-font-normal tw-text-sm tw-leading-normal tw-text-black",
    variant === TextVariantEnum.NORMAL && "tw-mb-0 tw-mt-0 tw-text-base tw-leading-relaxed tw-text-black",
    variant === TextVariantEnum.QUOTE &&
      "tw-mb-0 tw-mt-0 tw-text-base tw-font-light tw-leading-relaxed tw-text-gray-600",
    variant === TextVariantEnum.LEAD && " tw-text-xl tw-font-light tw-leading-relaxed tw-text-black"
  )
  return <p className={clsx(textClassName, className)}>{text ?? children}</p>
}

export default Text
