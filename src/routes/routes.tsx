import App from "../App"
import NotFound from "../pages/Errors/NotFound"
import Home from "../pages/Home"
import UI from "../pages/Ui"

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
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
