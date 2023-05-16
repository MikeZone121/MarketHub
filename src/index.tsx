import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Auth0Provider } from "@auth0/auth0-react"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"

import { routes } from "./routes/routes"
import { store } from "./store"

import "react-toastify/dist/ReactToastify.min.css"
import "./styles/global.css"

TimeAgo.addDefaultLocale(en)
const router = createBrowserRouter([...routes])
const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
)
