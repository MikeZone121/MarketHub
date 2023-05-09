import { Outlet } from "react-router-dom"

import ScrollToTop from "./components/Atoms/ScrollToTop"
import Footer from "./components/Footer"
import Footer from "./components/Organisms/Footer"
import Nav from "./components/Molecules/Nav"
import Maintenance from "./pages/Maintenance"

function App() {
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />
  } else {
    return (
      <div className="App tw-relative">
        <ScrollToTop />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    )
  }
}

export default App
