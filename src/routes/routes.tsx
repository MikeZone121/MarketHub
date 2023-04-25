import App from "../App"
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
            path: "products",
            element: "Products"
          },
          { path: "product/:id", element: "Product" },
          {
            path: "ui",
            element: <UI />
          }
        ]
      }
    ]
  }
]
