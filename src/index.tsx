import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { routes } from "./routes/routes"
import { store } from "./store"

import "react-toastify/dist/ReactToastify.min.css"
import "./styles/global.css"

const router = createBrowserRouter([...routes])

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer limit={3} />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
