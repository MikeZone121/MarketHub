import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"

import { routes } from "./routes/routes"
import { store } from "./store"

import "react-toastify/dist/ReactToastify.min.css"
import "./styles/global.css"

TimeAgo.addDefaultLocale(en)
const router = createBrowserRouter([...routes])

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
