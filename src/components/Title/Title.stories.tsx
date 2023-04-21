// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Title from "./index"
import { TitleSizeEnum } from "./types"

const meta: Meta<typeof Title> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ATOMS/Title",
  component: Title,
  tags: ["autodocs"]
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof Title>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const H1: Story = {
  args: {
    text: "Dit is een titel",
    size: TitleSizeEnum.H1
  }
}

export const H2: Story = {
  args: {
    text: "Dit is een titel",
    size: TitleSizeEnum.H2
  }
}

export const H3: Story = {
  args: {
    text: "Dit is een titel",
    size: TitleSizeEnum.H3
  }
}

export const H4: Story = {
  args: {
    text: "Dit is een titel",
    size: TitleSizeEnum.H4
  }
}

export const H5: Story = {
  args: {
    text: "Dit is een titel",
    size: TitleSizeEnum.H5
  }
}
