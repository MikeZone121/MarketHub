import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import InputField from "../../Atoms/InputField"
import { InputFieldTypesEnum } from "../../Atoms/InputField/types"

function Nav() {
  const [value, setValue] = useState("")
  return (
    <div id="main-nav" className="tw-shadow-sm">
      <nav className="tw-container tw-m-auto tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between">
        <a href="/" className="tw-text-2xl tw-font-bold tw-text-primary">
          <img className="tw-w-32" src="../../../public/images/branding/logo.svg" />
        </a>
        <ul className="tw-flex tw-justify-end tw-space-x-6 tw-p-3 tw-text-black ">
          <li>
            <NavLink to={`/`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`shop`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={`ui`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
              ui
            </NavLink>
          </li>
          <li>
            <NavLink to={`contact`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
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
      </nav>
      <Outlet />
    </div>
  )
}

export default Nav
