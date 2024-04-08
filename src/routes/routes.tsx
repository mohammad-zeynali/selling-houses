import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// pages import
import HomePage from "../ui/pages/home/Home";
import ProductDetails from "../ui/pages/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <HomePage /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);

export default router;
