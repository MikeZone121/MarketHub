import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { clsx } from "clsx"

import { positionClassnamesMap } from "../Button"
import { PositionEnum } from "../Button/types"

import { HyperlinkProps, HyperLinkVariantsEnum } from "./types"

function Hyperlink(props: HyperlinkProps) {
  const { text, href, className, target = "", icon, variant, iconPosition = PositionEnum.LEFT } = props
  const positionClassnames = clsx(positionClassnamesMap[iconPosition])
  const variantClassnames = clsx(
    variant === HyperLinkVariantsEnum.PRIMARY && "tw-text-primary  hover:tw-text-red-300",
    variant === HyperLinkVariantsEnum.SECONDARY && "tw-text-white hover:tw-text-secondary"
  )
  return (
    <NavLink
      to={href ?? ""}
      target={target}
      className={clsx(
        "tw-flex tw-cursor-pointer tw-items-center tw-text-sm tw-ease-in-out",
        variantClassnames,
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
    </NavLink>
  )
}

export default Hyperlink
