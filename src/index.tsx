import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { routes } from "./routes/routes"

// TODO: rm duplicate
import "./styles/global.css"

const router = createBrowserRouter([...routes])

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
