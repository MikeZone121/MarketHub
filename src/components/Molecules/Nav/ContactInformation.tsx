import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

import { PositionEnum } from "../../Atoms/Button/types"
import Hyperlink from "../../Atoms/HyperLink"
import { HyperLinkVariantsEnum } from "../../Atoms/HyperLink/types"

function ContactInformation() {
  return (
    <>
      <div className="tw-hidden md:tw-block">
        <Hyperlink
          icon={faEnvelope}
          iconPosition={PositionEnum.LEFT}
          href="mailto:info@markethub.com"
          text="info@markethub.com"
          variant={HyperLinkVariantsEnum.SECONDARY}
          className="tw-ml-2"
        />
      </div>
      <div className="tw-hidden md:tw-block">
        <Hyperlink
          icon={faPhone}
          iconPosition={PositionEnum.LEFT}
          href="tel:+32412345678"
          text="0412 34 56 78"
          variant={HyperLinkVariantsEnum.SECONDARY}
          className="tw-ml-4"
        />
      </div>
    </>
  )
}

export default ContactInformation
