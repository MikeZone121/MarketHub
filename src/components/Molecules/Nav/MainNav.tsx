import { useState } from "react"
import { NavLink } from "react-router-dom"
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import InputField from "../../Atoms/InputField"
import { InputFieldTypesEnum } from "../../Atoms/InputField/types"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"

function MainNav() {
  const [value, setValue] = useState("")

  const [toggleHamburger, setToggleHamburger] = useState(false)

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "UI", path: "/ui" },
    { title: "Contact", path: "/contact" }
  ]
  return (
    <div id="main-nav" className="tw-shadow-sm">
      <nav className="tw-container tw-m-auto tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between">
        <a
          href="/"
          className="md:block tw-hidden md:tw-flex md:tw-items-center md:tw-text-2xl md:tw-font-bold md:tw-text-primary"
        >
          <img src="images/branding/logo.svg" className="tw-w-20" />
          <Title size={TitleSizeEnum.H5} className="tw-font-semibold tw-text-gray-800" text="MarketHub" />
        </a>
        <ul className="tw-hidden sm:tw-flex sm:tw-justify-end sm:tw-space-x-6 sm:tw-p-3 sm:tw-text-black">
          {navigation.map((item, idx) => {
            return (
              <li key={idx}>
                <NavLink to={item.path} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className="tw-hidden sm:tw-block">
          <InputField
            id="Search"
            label="Search..."
            name="label"
            type={InputFieldTypesEnum.TEXT}
            value={value}
            icon={faSearch}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            onClick={() => alert("clicked")}
          />
        </div>
      </nav>
      {/* MOBILE */}
      <nav className="md:hidden tw-container tw-m-auto tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between">
        <a href="/" className="tw-flex tw-items-center tw-text-2xl tw-font-bold tw-text-primary md:tw-hidden">
          <img src="images/branding/logo.svg" className="tw-w-20" />
          <Title size={TitleSizeEnum.H5} className="tw-font-semibold tw-text-gray-800" text="MarketHub" />
        </a>
        <span
          className="tw-flex tw-p-3 tw-text-2xl tw-text-primary md:tw-hidden"
          onClick={() => setToggleHamburger(prev => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>
      </nav>
      <div>
        {toggleHamburger && (
          <div className="tw-fixed tw-left-0 tw-top-0  tw-z-10 tw-flex tw-h-[100vh] tw-w-[50%] tw-bg-primary tw-p-3 tw-text-white">
            <span className="tw-absolute tw-right-0 tw-mr-4 tw-text-xl">
              <FontAwesomeIcon icon={faClose} onClick={() => setToggleHamburger(false)} />
            </span>
            <ul className=" tw-justif-center tw-relative tw-mt-12 tw-flex tw-flex-col">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    <NavLink
                      to={item.path}
                      onClick={() => setToggleHamburger(false)}
                      className={({ isActive }) => (isActive ? "tw-underline" : "")}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainNav
