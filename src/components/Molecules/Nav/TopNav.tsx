import { useState } from "react"
import { NavLink } from "react-router-dom"
import { faCartShopping, faChevronDown, faEnvelope, faHeart, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import { PositionEnum } from "../../Atoms/Button/types"
import Hyperlink from "../../Atoms/HyperLink"

function TopNav() {
  // TODO: setDropdownIsOpen iso setdropdown,
  const [dropdownLanguage, setdropdownLanguage] = useState(false)

  const languages = [
    { id: "en", languageCode: "en-EN", name: "EN" },
    { id: "nl", languageCode: "nl-NL", name: "NL" },
    { id: "fr", languageCode: "fr-FR", name: "FR" }
  ]

  const currentLanguage = navigator.language

  return (
    <div className="tw-bg-primary">
      <div className="tw-m-auto tw-flex tw-max-w-screen-xl tw-items-center tw-justify-between tw-py-1 tw-text-white">
        <div className="tw-flex tw-flex-row">
          <div>
            <Hyperlink
              icon={faEnvelope}
              iconPosition={PositionEnum.LEFT}
              href="mailto:info@markethub.com"
              text="info@markethub.com"
              // TODO: rm custom styling to abstract component
              className="tw-ml-2 tw-text-white hover:tw-text-secondary"
            />
          </div>
          <div className="tw-hidden md:tw-block">
            <Hyperlink
              icon={faPhone}
              iconPosition={PositionEnum.LEFT}
              href="tel:+32412345678"
              text="+32412345678"
              className="tw-ml-4 tw-text-white hover:tw-text-secondary"
            />
          </div>
        </div>
        <div>
          <ul className="tw-relative tw-flex tw-items-center tw-space-x-6 tw-p-3 tw-text-black">
            <div>
              {/* TODO: do not use a span for components to interact with */}
              <span className="tw-text-white" onClick={() => setdropdownLanguage(prev => !prev)}>
                {/* TODO: use a array.find */}
                {currentLanguage && languages.filter(l => l.languageCode === currentLanguage)[0]?.name}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={clsx(
                    "tw-ease tw-ml-1  tw-text-sm tw-transition-all tw-duration-200",
                    !dropdownLanguage && "tw--rotate-90"
                  )}
                />
              </span>
              {dropdownLanguage && (
                <div
                  className={clsx(
                    !dropdownLanguage && "!tw-top-10",
                    "tw-ease tw-absolute tw--top-20 tw-left-0 tw-z-10 tw-flex tw-flex-col tw-bg-primary tw-p-3 tw-transition-all tw-duration-200"
                  )}
                >
                  {languages
                    .filter(l => l.languageCode !== currentLanguage)
                    // TODO: what is a l?
                    .map(l => (
                      <li key={l.id} className="tw-my-1">
                        <NavLink to={`/${l.languageCode}`} className="tw-text-white">
                          {l.name}
                        </NavLink>
                      </li>
                    ))}
                </div>
              )}
            </div>
            <li>
              {/* TODO: can be just strings */}
              <NavLink to={`shop`} className="tw-flex tw-items-center tw-text-white">
                <span className="tw-hidden md:tw-block">Login</span>
                <FontAwesomeIcon icon={faUser} className="tw-ml-2" />
              </NavLink>
            </li>
            <li>
              <NavLink to={`ui`} className="tw-flex tw-items-center tw-text-white">
                <span className="tw-hidden md:tw-block">Wishlist</span>
                <FontAwesomeIcon icon={faHeart} className="tw-ml-2" />
              </NavLink>
            </li>
            <li>
              <NavLink to={`contact`} className="tw-text-white">
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav
