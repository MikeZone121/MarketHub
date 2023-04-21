// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Text from "./index"
import { TextVariantEnum } from "./types"

const meta: Meta<typeof Text> = {
  title: "ATOMS/Text",
  component: Text,
  tags: ["autodocs"]
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const SMALL: Story = {
  args: {
    text: "Dit is een titel",
    variant: TextVariantEnum.SMALL
  }
}

export const NORMAL: Story = {
  args: {
    text: "Dit is een titel",
    variant: TextVariantEnum.NORMAL
  }
}

export const QUOTE: Story = {
  args: {
    text: "Dit is een titel",
    variant: TextVariantEnum.QUOTE
  }
}

export const LEAD: Story = {
  args: {
    text: "Dit is een titel",
    variant: TextVariantEnum.LEAD
  }
}
