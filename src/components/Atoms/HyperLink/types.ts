import { IconProp } from "@fortawesome/fontawesome-svg-core"

import { PositionEnum } from "../Button/types"

export interface HyperlinkProps {
  href?: string
  text?: string
  className?: string
  target?: string
  icon?: IconProp
  iconPosition?: PositionEnum
}
