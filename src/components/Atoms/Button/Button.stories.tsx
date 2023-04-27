// Button.stories.ts|tsx

import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryObj } from "@storybook/react"

import Button from "./index"
import { BtnVariantEnum, PositionEnum } from "./types"

const meta: Meta<typeof Button> = {
  title: "ATOMS/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const FULL: Story = {
  args: {
    text: "Button",
    onClick: () => alert("Clicked!"),
    variant: BtnVariantEnum.FULL,
    isFullWidth: false,
    isLoading: false,
    isDisabled: false
  }
}

export const INVERT: Story = {
  args: {
    text: "Button",
    onClick: () => alert("Clicked!"),
    variant: BtnVariantEnum.INVERT,
    isFullWidth: false,
    isLoading: false,
    isDisabled: false
  }
}

export const TEXTICON: Story = {
  args: {
    text: "Button",
    onClick: () => alert("Clicked!"),
    iconPosition: PositionEnum.LEFT,
    icon: faCheck,
    variant: BtnVariantEnum.TEXTICON,
    isFullWidth: false,
    isLoading: false,
    isDisabled: false
  }
}

export const OUTLINED: Story = {
  args: {
    text: "Button",
    onClick: () => alert("Clicked!"),
    variant: BtnVariantEnum.OUTLINED,
    isFullWidth: false,
    isLoading: false,
    isDisabled: false
  }
}

export const LOADING: Story = {
  args: {
    text: "Button",
    onClick: () => alert("Clicked!"),
    iconPosition: PositionEnum.LEFT,
    icon: faCheck,
    variant: BtnVariantEnum.FULL,
    isFullWidth: false,
    isLoading: true,
    isDisabled: false
  }
}

export const DISABLED: Story = {
  args: {
    text: "Button",
    onClick: () => alert("Clicked!"),
    iconPosition: PositionEnum.LEFT,
    icon: faClose,
    variant: BtnVariantEnum.FULL,
    isFullWidth: false,
    isLoading: false,
    isDisabled: true
  }
}
