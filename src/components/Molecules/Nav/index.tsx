import { Outlet } from "react-router-dom"

import MainNav from "./MainNav"
import TopNav from "./TopNav"

function Nav() {
  return (
    <div>
      <TopNav />
      <MainNav />
      <Outlet />
    </div>
  )
}

export default Nav
