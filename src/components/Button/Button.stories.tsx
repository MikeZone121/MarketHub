// Button.stories.ts|tsx

import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryObj } from "@storybook/react"

import Button from "./index"
import { BtnVariantEnum, PositionEnum } from "./types"

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ATOMS/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const FULL: Story = {
  args: {
    text: "Button",
    onClick: () => alert("Clicked!"),
    iconPosition: PositionEnum.LEFT,
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
    iconPosition: PositionEnum.LEFT,
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
    iconPosition: PositionEnum.LEFT,
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
