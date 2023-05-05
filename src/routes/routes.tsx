import App from "../App"
import Cart from "../pages/Cart"
import Contact from "../pages/Contact"
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
          { path: "shop/:id", element: "Product" },
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
