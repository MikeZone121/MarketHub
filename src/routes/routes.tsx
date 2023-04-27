import App from "../App"
import Contact from "../pages/Contact"
import Error from "../pages/Errors/Error"
import Home from "../pages/Home"
import UI from "../pages/Ui"

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
          { path: "product/:id", element: "Product" },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "ui",
            element: <UI />
          }
        ]
      }
    ]
  }
]
