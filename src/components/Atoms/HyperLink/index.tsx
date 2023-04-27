import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { clsx } from "clsx"

import { positionClassnamesMap } from "../Button"
import { PositionEnum } from "../Button/types"

import { HyperlinkProps } from "./types"

function Hyperlink(props: HyperlinkProps) {
  const { text, href, className, target = "", icon, iconPosition = PositionEnum.LEFT } = props
  const positionClassnames = clsx(positionClassnamesMap[iconPosition])
  return (
    <a
      href={href}
      target={target}
      className={clsx(
        "tw-flex tw-cursor-pointer tw-items-center tw-text-primary tw-ease-in-out hover:tw-text-red-300",
        positionClassnames,
        className
      )}
    >
      {icon && (
        <span
          className={clsx(
            iconPosition === PositionEnum.LEFT && text && "tw-mr-2",
            iconPosition === PositionEnum.RIGHT && text && "tw-ml-2",
            iconPosition === PositionEnum.TOP && text && "tw-mb-1",
            iconPosition === PositionEnum.BOTTOM && text && "tw-mt-1"
          )}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {text}
    </a>
  )
}

export default Hyperlink
