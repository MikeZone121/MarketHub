import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { faBasketShopping, faChevronDown, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import { LoginButton, Profile } from "../LoginButton"

import ContactInformation from "./ContactInformation"

function TopNav() {
  const [dropDownLanguageIsOpen, setDropdownLanguageIsOpen] = useState(false)
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const languages = [
    { id: "en", languageCode: "en-EN", name: "EN" },
    { id: "nl", languageCode: "nl-NL", name: "NL" },
    { id: "fr", languageCode: "fr-FR", name: "FR" }
  ]

  const currentLanguage = navigator.language

  return (
    <div className="tw-bg-primary">
      <div className="tw-m-auto tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-items-center tw-justify-between tw-text-white">
        <div className="tw-flex tw-flex-row">
          <ContactInformation />
        </div>
        <div className="tw-w-full md:tw-w-auto">
          <ul className="tw-relative tw-flex tw-items-center tw-p-3 tw-text-black md:tw-space-x-6">
            <div className="tw-hidden md:tw-block">
              <button className="tw-text-base tw-text-white" onClick={() => setDropdownLanguageIsOpen(prev => !prev)}>
                {(currentLanguage && languages.find(language => language.languageCode === currentLanguage)?.name) ??
                  "NL"}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={clsx(
                    "tw-ease tw-ml-1  tw-text-base tw-transition-all tw-duration-200",
                    !dropDownLanguageIsOpen && "tw--rotate-90"
                  )}
                />
              </button>
              <div
                className={clsx(
                  "tw-ease tw-absolute tw-left-0 tw-flex tw-flex-col tw-bg-primary tw-p-3  tw-transition-all tw-duration-200",
                  dropDownLanguageIsOpen
                    ? "tw-visible tw-top-10 tw-z-10 tw-opacity-100"
                    : "tw-invisible tw--top-[100%] tw--z-20 tw-p-0 tw-opacity-0"
                )}
              >
                {languages
                  .filter(language => language.languageCode !== currentLanguage)
                  .map(language => (
                    <li key={language.id} className="tw-my-1 tw-text-base">
                      <NavLink to={`/${language.languageCode}`} className="tw-text-white">
                        {language.name}
                      </NavLink>
                    </li>
                  ))}
              </div>
            </div>
            <li className="tw-ml-0 tw-flex tw-flex-grow md:tw-block">
              {isAuthenticated ? <Profile /> : <LoginButton />}
            </li>
            <li className="tw-mr-6 md:tw-mr-0">
              <NavLink to="/wishlist" className="tw-flex tw-items-center tw-gap-2 tw-text-white">
                <span className="tw-hidden tw-text-base md:tw-block">Wishlist</span>
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="tw-text-white">
                <FontAwesomeIcon icon={faBasketShopping} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav
