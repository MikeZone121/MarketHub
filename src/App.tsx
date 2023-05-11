import { Outlet } from "react-router-dom"

import ScrollToTop from "./components/Atoms/ScrollToTop"
import Nav from "./components/Molecules/Nav"
import Footer from "./components/Organisms/Footer"
import Maintenance from "./pages/Maintenance"

function App() {
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />
  } else {
    return (
      <div className="App tw-relative">
        {/* TODO: create custom hook useScrollToTop */}
        <ScrollToTop />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    )
  }
}

export default App
