// Button.stories.ts|tsx

import React, { useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import type { Meta } from "@storybook/react"

import InputField from "./index"
import { InputFieldTypesEnum } from "./types"

const meta: Meta<typeof InputField> = {
  title: "ATOMS/Inputs/Disabled",
  component: InputField,
  tags: ["autodocs"]
} satisfies Meta<typeof InputField>

export default meta
export const Text = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="Text"
      name="Text"
      value={value}
      label="Text"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.TEXT}
      isDisabled
    />
  )
}

export const Search = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="search"
      name="Search"
      value={value}
      icon={faSearch}
      label="Search"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.TEXT}
      isDisabled
    />
  )
}

export const Tel = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="Telephone"
      name="Telephone"
      value={value}
      label="Telephone"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.TEL}
      isDisabled
    />
  )
}

export const Email = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="E-mail"
      name="E-mail"
      value={value}
      label="E-mail"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.EMAIL}
      isDisabled
    />
  )
}

export const Password = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="Password"
      name="Password"
      value={value}
      label="Password"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.PASSWORD}
      isDisabled
    />
  )
}

export const Number = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="Number"
      name="Number"
      value={value}
      label="0"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.NUMBER}
      isDisabled
    />
  )
}

export const Date = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="Date"
      name="Date"
      value={value}
      label=""
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.DATE}
      isDisabled
    />
  )
}

export const Time = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="Time"
      name="Time"
      value={value}
      label=""
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.TIME}
      isDisabled
    />
  )
}

export const DateTime = () => {
  const [value, setValue] = useState("")

  return (
    <InputField
      id="DateTime"
      name="TimDateTimee"
      value={value}
      label=""
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={InputFieldTypesEnum.DATE_TIME}
      isDisabled
    />
  )
}
