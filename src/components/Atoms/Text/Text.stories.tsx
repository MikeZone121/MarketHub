// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Text from "./index"
import { TextVariantEnum } from "./types"

const meta: Meta<typeof Text> = {
  title: "UI/Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    text: "Dit is een paragraaf"
  }
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const Small: Story = {
  args: {
    variant: TextVariantEnum.SMALL
  }
}

export const Normal: Story = {
  args: {
    variant: TextVariantEnum.NORMAL
  }
}

export const Quote: Story = {
  args: {
    variant: TextVariantEnum.QUOTE
  }
}

export const Lead: Story = {
  args: {
    variant: TextVariantEnum.LEAD
  }
}
