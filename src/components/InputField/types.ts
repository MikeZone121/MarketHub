import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface InputFieldProps {
  id: string
  label: string
  name: string
  type: InputFieldTypesEnum
  icon?: IconProp
  value: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  error?: InputFieldError
  isDisabled?: boolean
  isRequired?: boolean
  isReadonly?: boolean
}

export interface InputFieldError {
  message: string
}

export enum InputFieldTypesEnum {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
  DATE = "date",
  TIME = "time",
  DATE_TIME = "datetime-local",
  TEL = "tel"
}
