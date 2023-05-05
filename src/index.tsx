import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { routes } from "./routes/routes"

import "./styles/global.css"
import { Provider } from "react-redux"
import { store } from "./store"

const router = createBrowserRouter([...routes])

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
