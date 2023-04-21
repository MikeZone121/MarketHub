// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Title from "./index"
import { TitleSizeEnum } from "./types"

const meta: Meta<typeof Title> = {
  title: "ATOMS/Title",
  component: Title,
  tags: ["autodocs"]
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof Title>

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
