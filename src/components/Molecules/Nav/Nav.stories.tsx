// Button.stories.ts|tsx

import { BrowserRouter } from "react-router-dom"
import type { Meta } from "@storybook/react"

import Nav from "./index"

const meta: Meta<typeof Nav> = {
  title: "ATOMS/Navigation",
  component: Nav,
  tags: ["autodocs"]
} satisfies Meta<typeof Nav>

export default meta

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  )
}
