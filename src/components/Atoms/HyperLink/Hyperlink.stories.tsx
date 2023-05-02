// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Hyperlink from "./index"
import { BrowserRouter } from "react-router-dom"

const meta: Meta<typeof Hyperlink> = {
  title: "UI/Atoms/Hyperlink",
  component: Hyperlink,
  tags: ["autodocs"],
  args: { text: "Dit een link", target: "_blank" }
} satisfies Meta<typeof Hyperlink>

export default meta
type Story = StoryObj<typeof Hyperlink>

export const NavLink = () => {
  return (
    <BrowserRouter>
      <Hyperlink {...meta.args} href="https://www.google.be" />
    </BrowserRouter>
  )
}
