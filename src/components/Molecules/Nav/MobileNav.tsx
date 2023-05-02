import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import clsx from "clsx"

interface MobileNavProps {
  navigationItems: {
    title: string
    path: string
  }[]
}
function MobileNav({ navigationItems }: MobileNavProps) {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

  useEffect(() => {
    const body = document.querySelector("body")
    if (body) {
      if (hamburgerIsOpen) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = "auto"
      }
    }
  }, [hamburgerIsOpen])

  return (
    <>
      <nav className="md:hidden tw-container tw-m-auto tw-flex tw-w-11/12 tw-flex-row tw-items-center tw-justify-between">
        <div>
          <NavLink to="/" className="tw-flex tw-items-center tw-text-2xl tw-font-bold tw-text-primary md:tw-hidden">
            <img src="images/branding/logo.svg" className="tw-w-16" />
          </NavLink>
        </div>
        <div>
          <button
            className="tw-relative tw-z-20 tw-flex tw-p-3 tw-text-2xl tw-text-primary md:tw-hidden"
            onClick={() => setHamburgerIsOpen(prev => !prev)}
          >
            {hamburgerIsOpen ? (
              <FontAwesomeIcon icon={faClose} className="tw-z-20 tw-text-3xl tw-text-white" />
            ) : (
              <FontAwesomeIcon
                className={clsx("tw-ease tw-transition-all tw-duration-200", !hamburgerIsOpen && "")}
                icon={faBars}
              />
            )}
          </button>
        </div>
      </nav>
      <div>
        <div
          className={`tw-fixed tw-top-0 tw-z-10 tw-flex tw-min-h-full tw-w-full tw-justify-center tw-bg-primary tw-p-3 tw-text-white tw-transition-all tw-duration-500 tw-ease-in-out md:tw-hidden ${
            hamburgerIsOpen ? "tw-right-0 tw-opacity-100" : "tw-right-[-100%] tw-opacity-0"
          }`}
        >
          <div>
            <NavLink to="/" className="tw-absolute tw-left-[35%] tw-top-20">
              <img src="images/branding/logo_white.png" className="tw-w-32" />
            </NavLink>
          </div>
          <div className="tw-flex tw-items-center">
            <ul className="tw-relative tw-mt-12 tw-flex tw-flex-col tw-text-center tw-text-2xl ">
              {navigationItems.map((item, idx) => {
                return (
                  <li key={idx} className="tw-my-2">
                    <NavLink
                      to={item.path}
                      onClick={() => setHamburgerIsOpen(false)}
                      className={({ isActive }) => clsx(isActive && "tw-underline")}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Todo auto date */}
          <div className="tw-absolute tw-bottom-4">&copy; {new Date().getFullYear()} MarketHub</div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
