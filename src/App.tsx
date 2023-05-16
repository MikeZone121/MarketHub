import { Outlet } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

import ScrollToTop from "./components/Atoms/ScrollToTop"
import Nav from "./components/Molecules/Nav"
import CartPopUp from "./components/Organisms/CartPopUp"
import Footer from "./components/Organisms/Footer"
import Maintenance from "./pages/Maintenance"

function App() {
  const { isLoading, error } = useAuth0()
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />
  } else {
    return (
      <div className="App tw-relative">
        <ScrollToTop />
        <Nav />
        <CartPopUp />
        <Outlet />
        <Footer />
      </div>
    )
  }
}

export default App
