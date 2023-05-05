import App from "../App"
import Cart from "../pages/Cart"
import Contact from "../pages/Contact"
import Detail from "../pages/Detail"
import Error from "../pages/Errors/Error"
import Home from "../pages/Home"

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "shop",
            element: "Products"
          },
          { path: "shop/:slug", element: <Detail /> },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]
  }
]
