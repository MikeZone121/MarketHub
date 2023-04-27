// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Hyperlink from "./index"

const meta: Meta<typeof Hyperlink> = {
  title: "ATOMS/Hyperlink",
  component: Hyperlink,
  tags: ["autodocs"]
} satisfies Meta<typeof Hyperlink>

export default meta
type Story = StoryObj<typeof Hyperlink>

export const NavLink: Story = {
  args: {
    text: "Dit een link",
    className: "nav-animation",
    target: "_blank",
    href: "https://www.google.be"
  }
}

export const NormalLink: Story = {
  args: {
    text: "Dit is een link",
    target: "_blank",
    href: "https://www.google.be"
  }
}
