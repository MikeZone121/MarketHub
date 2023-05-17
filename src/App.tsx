import { Outlet } from "react-router-dom"

import Nav from "./components/Molecules/Nav"
import Footer from "./components/Organisms/Footer"
import useScrollToTop from "./hooks/ScrollToTop"
import Maintenance from "./pages/Maintenance"

function App() {
  useScrollToTop()
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />
  } else {
    return (
      <div className="App tw-relative">
        <Nav />
        {/* <CartPopUp /> */}
        <Outlet />
        <Footer />
      </div>
    )
  }
}

export default App
