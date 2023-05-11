// Button.stories.ts|tsx

import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryObj } from "@storybook/react"

import Button from "./index"
import { BtnVariantEnum, PositionEnum } from "./types"

const meta: Meta<typeof Button> = {
  title: "UI/Atoms/ButtonHyperlink",
  component: Button,
  tags: ["autodocs"],
  args: {
    text: "Button",
    isFullWidth: false,
    isLoading: false,
    isDisabled: false
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Full: Story = {
  args: {
    variant: BtnVariantEnum.FULL
  }
}

export const Invert: Story = {
  args: {
    variant: BtnVariantEnum.INVERT
  }
}

export const TextIcon: Story = {
  args: {
    iconPosition: PositionEnum.LEFT,
    icon: faCheck,
    variant: BtnVariantEnum.TEXTICON
  }
}

export const Outlined: Story = {
  args: {
    variant: BtnVariantEnum.OUTLINED
  }
}

export const Loading: Story = {
  args: {
    iconPosition: PositionEnum.LEFT,
    icon: faCheck,
    variant: BtnVariantEnum.FULL,
    isLoading: true
  }
}

export const Disabled: Story = {
  args: {
    iconPosition: PositionEnum.LEFT,
    icon: faClose,
    variant: BtnVariantEnum.FULL,
    isDisabled: true
  }
}
