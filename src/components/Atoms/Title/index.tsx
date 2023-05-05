import { createElement } from "react"
import clsx from "clsx"

import { TitleProps, TitleSizeEnum } from "./types"

function Title({ text, size = TitleSizeEnum.H2, className }: TitleProps) {
  const titleClassName = clsx(
    size === TitleSizeEnum.H1 && "tw-m-0 tw-text-5xl tw-font-medium tw-leading-tight tw-text-primary",
    size === TitleSizeEnum.H2 && "tw-m-0 tw-text-4xl tw-font-medium tw-leading-tight tw-text-primary",
    size === TitleSizeEnum.H3 && "tw-m-0 tw-text-3xl tw-font-medium tw-leading-tight tw-text-primary",
    size === TitleSizeEnum.H4 && "tw-m-0 tw-text-2xl tw-font-medium tw-leading-tight tw-text-primary",
    size === TitleSizeEnum.H5 && "tw-m-0 tw-text-xl tw-font-medium tw-leading-tight tw-text-primary",
    size === TitleSizeEnum.H6 && "tw-m-0 tw-text-lg tw-font-medium tw-leading-tight tw-text-primary",
    className
  )
  return createElement(size, { className: titleClassName }, text)
}

export default Title
