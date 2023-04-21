// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Text from "./index"
import { TextVariantEnum } from "./types"

const meta: Meta<typeof Text> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ATOMS/Text",
  component: Text,
  tags: ["autodocs"]
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

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
