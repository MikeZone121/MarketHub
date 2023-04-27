// Button.stories.ts|tsx

import { BrowserRouter } from "react-router-dom"
import type { Meta } from "@storybook/react"

import Nav from "./index"

const meta: Meta<typeof Nav> = {
  title: "ATOMS/Navigation",
  // TODO: define if this should be a 'plain' ui component if the data is hardcoded in the component
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
