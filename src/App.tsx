import Nav from "./components/Molecules/Nav"
import Maintenance from "./pages/Maintenance"

import "./styles/global.css"

function App() {
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />
  } else {
    return (
      <div className="App tw-relative tw-overflow-hidden">
        <Nav />
      </div>
    )
  }
}

export default App
