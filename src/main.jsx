import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Body from './components/Body'
import About from "./components/About"
import Product from "./components/Products.jsx"
import Contact from "./components/Contact"
import Cart from "./components/Cart"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "product/:id",
        element: <Product />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
