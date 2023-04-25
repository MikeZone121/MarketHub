import { NavLink, Outlet } from "react-router-dom"

import Footer from "./components/Footer"
import Maintenance from "./pages/Maintenance"

import "./styles/global.css"

function App() {
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />
  } else {
    return (
      <div className="App">
        <div id="main-nav">
          <nav>
            <ul className="tw-flex tw-justify-center tw-space-x-6 tw-bg-gray-100 tw-p-3 tw-text-black tw-shadow-sm">
              <li>
                <NavLink to={`/`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={`product/1`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
                  Product detail 1
                </NavLink>
              </li>
              <li>
                <NavLink to={`products`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to={`ui`} className={({ isActive }) => (isActive ? "tw-text-primary" : "")}>
                  UI
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />

        <Footer />
      </div>
    )
  }
}

export default App
