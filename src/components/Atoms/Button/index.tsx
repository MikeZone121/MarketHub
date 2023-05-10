import { forwardRef, Ref } from "react"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import { BtnVariantEnum, ButtonProps, PositionEnum } from "./types"

export const positionClassnamesMap = {
  [PositionEnum.LEFT]: "tw-flex-row",
  [PositionEnum.RIGHT]: "tw-flex-row-reverse",
  [PositionEnum.TOP]: "tw-flex-col tw-items-center",
  [PositionEnum.BOTTOM]: "tw-flex-col-reverse tw-items-center"
}
const Button = forwardRef(function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const {
    icon,
    onClick,
    text,
    isFullWidth,
    isLoading,
    isDisabled,
    className,
    iconPosition = PositionEnum.LEFT,
    iconClassName,
    iconSize = "1x",
    variant = BtnVariantEnum.INVERT,
    children
  } = props
  const buttonClassnames = clsx(
    isFullWidth && "tw-w-full",
    isDisabled && "tw-opacity-50 tw-cursor-not-allowed tw-pointer-events-none",
    (!icon || (icon && (text || children))) &&
      "tw-flex tw-bg-primary tw-px-4 tw-py-2 tw-rounded-md tw-items-center tw-justify-center tw-transition-all tw-duration-200 tw-ease-out active:tw-scale-90 hover:tw-shadow-md"
  )
  const positionClassnames = clsx(positionClassnamesMap[iconPosition])

  const variantClassnamesMap = {
    [BtnVariantEnum.FULL]:
      "tw-bg-primary tw-text-white hover:tw-bg-white tw-border tw-border-transparent hover:tw-border-primary hover:tw-text-primary",
    [BtnVariantEnum.INVERT]:
      "tw-bg-white tw-text-primary hover:tw-bg-primary tw-border tw-border-transparent hover:tw-border-primary hover:tw-text-white",
    [BtnVariantEnum.TEXTICON]: "tw-text-black tw-border tw-border-transparent hover:tw-text-white",
    [BtnVariantEnum.OUTLINED]:
      "tw-bg-white tw-text-primary tw-border tw-border-primary hover:tw-bg-primary tw-border hover:tw-text-white"
  }

  const variantClassnames = clsx(variantClassnamesMap[variant])
  return (
    <button
      ref={ref}
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(buttonClassnames, positionClassnames, variantClassnames, className)}
    >
      {(isLoading || icon) && (
        <span
          className={clsx(
            isLoading && "tw-animate-spin",
            iconPosition === PositionEnum.LEFT && (text || children) && "tw-mr-2",
            iconPosition === PositionEnum.RIGHT && (text || children) && "tw-ml-2",
            iconPosition === PositionEnum.TOP && (text || children) && "tw-mb-1",
            iconPosition === PositionEnum.BOTTOM && (text || children) && "tw-mt-1",
            variant === BtnVariantEnum.TEXTICON &&
              "tw-flex tw-h-5 tw-w-5 tw-items-center tw-justify-center tw-rounded-full tw-p-1 tw-text-gray-500 tw-transition-all tw-duration-200 tw-ease-out hover:tw-text-black",
            iconClassName
          )}
        >
          {isLoading && <FontAwesomeIcon icon={faSpinner} size={iconSize} />}
          {!isLoading && icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
        </span>
      )}
      <span>{text ?? children}</span>
    </button>
  )
})

export default Button
