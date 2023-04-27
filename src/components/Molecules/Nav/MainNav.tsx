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
      <nav className="tw-m-auto tw-flex tw-w-full tw-max-w-screen-xl tw-flex-row tw-items-center tw-justify-between">
        <a
          href="/"
          className="md:block tw-hidden md:tw-flex md:tw-items-center md:tw-text-2xl md:tw-font-bold md:tw-text-primary"
        >
          <img src="images/branding/logo.svg" className="tw-w-20" />
          <Title size={TitleSizeEnum.H5} className="tw-font-semibold tw-text-gray-800" text="MarketHub" />
        </a>
        <ul className="tw-hidden md:tw-flex md:tw-justify-end md:tw-space-x-6 md:tw-p-3 md:tw-text-black">
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
        <div className="searchInputLg tw-hidden md:tw-block">
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
        <div>
          <a href="/" className="tw-flex tw-items-center tw-text-2xl tw-font-bold tw-text-primary md:tw-hidden">
            <img src="images/branding/logo.svg" className="tw-w-20" />
            <Title size={TitleSizeEnum.H5} className="tw-font-semibold tw-text-gray-800" text="MarketHub" />
          </a>
        </div>
        <div className="search tw-relative md:tw-hidden">
          <InputField
            id="Search"
            label="Search..."
            name="label"
            type={InputFieldTypesEnum.TEXT}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            className="inputSearch"
          />
          <span className="searchIcon focus:hidden">
            <FontAwesomeIcon icon={faSearch} className="focus:hidden tw-bottom-2 tw-left-0 tw-text-gray-500" />
          </span>
        </div>
        <div>
          <span
            className="tw-z-20 tw-flex tw-p-3 tw-text-2xl tw-text-primary md:tw-hidden"
            onClick={() => setToggleHamburger(prev => !prev)}
          >
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </nav>
      <div>
        <div
          className={`tw-absolute tw-top-0 tw-z-10 tw-flex tw-min-h-screen tw-w-full tw-justify-center tw-bg-primary tw-p-3 tw-text-white tw-transition-all tw-duration-500 tw-ease-in-out md:tw-hidden ${
            toggleHamburger ? "tw-right-0 tw-opacity-100" : "tw-right-[-100%] tw-opacity-0"
          }`}
        >
          <span className="tw-absolute tw-right-0 tw-top-20 tw-mr-4 tw-text-3xl tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-rotate-180">
            <FontAwesomeIcon icon={faClose} onClick={() => setToggleHamburger(false)} />
          </span>
          <div>
            <a href="/" className="tw-absolute tw-left-[35%] tw-top-20">
              <img src="images/branding/logo_white.png" className="tw-w-32" />
            </a>
          </div>
          <div className="tw-flex tw-items-center">
            <ul className="tw-relative tw-mt-12 tw-flex tw-flex-col tw-text-center tw-text-2xl">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="tw-my-2">
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
          <div className="tw-absolute tw-bottom-4">&copy; 2022 MarketHub</div>
        </div>
      </div>
    </div>
  )
}

export default MainNav
