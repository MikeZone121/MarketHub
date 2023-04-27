import { useState } from "react"
import { clsx } from "clsx"

import Button from "../Button"
import { BtnVariantEnum } from "../Button/types"

import TogglePassword from "./TogglePassword"
import { InputFieldProps, InputFieldTypesEnum } from "./types"

function InputField(props: InputFieldProps) {
  const {
    id,
    name,
    label,
    className,
    value,
    icon,
    isDisabled = false,
    isRequired,
    isReadonly,
    error,
    onChange,
    onClick
  } = props
  const [type, setType] = useState(props.type || InputFieldTypesEnum.TEXT)
  const togglePassword = () => {
    setType(type === InputFieldTypesEnum.PASSWORD ? InputFieldTypesEnum.TEXT : InputFieldTypesEnum.PASSWORD)
  }

  const [isFocused, setIsFocused] = useState(false)

  const typeClassName = clsx(
    type === InputFieldTypesEnum.TEXT && "",
    type === InputFieldTypesEnum.PASSWORD && "",
    type === InputFieldTypesEnum.EMAIL && "",
    type === InputFieldTypesEnum.NUMBER && "",
    type === InputFieldTypesEnum.DATE && "",
    type === InputFieldTypesEnum.TIME && "",
    type === InputFieldTypesEnum.DATE_TIME && "",
    type === InputFieldTypesEnum.TEL && ""
  )

  return (
    <div className="tw-relative tw-inline-block">
      <label className={clsx(isDisabled && "tw-cursor-not-allowed tw-bg-transparent tw-text-gray-200")} htmlFor={id}>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          required={isRequired}
          readOnly={isReadonly}
          disabled={isDisabled}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          className={clsx(
            "tw-border-grey-800 tw-border-b tw-p-2 tw-pr-8 focus-within:tw-outline-0 focus-within:!tw-outline-gray-300",
            typeClassName,
            isDisabled && "tw-cursor-not-allowed tw-bg-transparent tw-text-gray-200",
            className
          )}
          onChange={onChange}
        />
        {icon && props.type !== InputFieldTypesEnum.PASSWORD && (
          <Button
            onClick={() => onClick && onClick()}
            icon={icon}
            isDisabled={isDisabled}
            className="tw-absolute tw-right-0 tw-top-0 tw-border-0 tw-px-0 hover:tw-border-0 hover:tw-bg-transparent hover:tw-shadow-none"
            variant={BtnVariantEnum.TEXTICON}
          />
        )}
        {props.type === InputFieldTypesEnum.PASSWORD && (
          <TogglePassword onClick={() => togglePassword()} type={type} isDisabled={isDisabled} />
        )}
        <span
          className={clsx(
            isFocused || value ? "tw-absolute tw--top-4 tw-left-2 tw-bg-white" : "tw-absolute tw-left-2 tw-top-2",
            "tw-transition-all tw-duration-100 tw-ease-in-out"
          )}
        >
          {label}
        </span>
        {error && <p className="tw-mt-2 tw-text-sm tw-text-primary">{error?.message}</p>}
      </label>
    </div>
    /* TODO: ICONS ARE NOT DISABLED */
  )
}

export default InputField
