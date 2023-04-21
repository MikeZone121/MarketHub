import { clsx } from "clsx"

import { HyperlinkProps } from "./types"

function Hyperlink(props: HyperlinkProps) {
  const { text, className, target = "_blank" } = props
  return (
    <a {...props} target={target} className={clsx("tw-text-primary hover:tw-text-red-300 tw-ease-in-out", className)}>
      {text}
    </a>
  )
}

export default Hyperlink
