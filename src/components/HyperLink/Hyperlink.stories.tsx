// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Hyperlink from "./index"

const meta: Meta<typeof Hyperlink> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ATOMS/Hyperlink",
  component: Hyperlink,
  tags: ["autodocs"]
} satisfies Meta<typeof Hyperlink>

export default meta
type Story = StoryObj<typeof Hyperlink>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

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
