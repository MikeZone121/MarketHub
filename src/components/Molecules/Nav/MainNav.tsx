import { useState } from "react"
import { NavLink } from "react-router-dom"
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import InputField from "../../Atoms/InputField"
import { InputFieldTypesEnum } from "../../Atoms/InputField/types"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"
import MobileNav from "./MobileNav"
import clsx from "clsx"

function MainNav() {
  const [value, setValue] = useState("")

  const navigationItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Contact", path: "/contact" }
  ]
  return (
    <div id="main-nav" className="tw-shadow-sm">
      <nav className="tw-m-auto tw-flex tw-w-11/12 tw-max-w-screen-xl tw-flex-row tw-items-center tw-justify-between">
        <NavLink
          to="/"
          className="md:block tw-hidden md:tw-flex md:tw-items-center md:tw-text-2xl md:tw-font-bold md:tw-text-primary"
        >
          <img src="images/branding/logo.svg" className="tw-w-20" />
          <Title size={TitleSizeEnum.H5} className="tw-font-semibold tw-text-gray-800" text="MarketHub" />
        </NavLink>
        <ul className="tw-hidden md:tw-flex md:tw-justify-end md:tw-space-x-6 md:tw-p-3 md:tw-text-black">
          {navigationItems.map((item, idx) => {
            return (
              <li key={idx}>
                <NavLink to={item.path} className={({ isActive }) => clsx(isActive && "tw-text-primary")}>
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
      <MobileNav navigationItems={navigationItems} />
    </div>
  )
}

export default MainNav
