import { Outlet } from "react-router-dom"

import Footer from "./components/Footer"
import Nav from "./components/Molecules/Nav"
import Maintenance from "./pages/Maintenance"

function App() {
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />
  } else {
    return (
      <div className="App tw-relative tw-overflow-hidden">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    )
  }
}

export default App
