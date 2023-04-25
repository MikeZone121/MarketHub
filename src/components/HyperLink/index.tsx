import { clsx } from "clsx"

import { HyperlinkProps } from "./types"

function Hyperlink(props: HyperlinkProps) {
  const { text, className, target = "" } = props
  return (
    <a {...props} target={target} className={clsx("tw-text-primary tw-ease-in-out hover:tw-text-red-300", className)}>
      {text}
    </a>
  )
}

export default Hyperlink
