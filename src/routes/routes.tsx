import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// pages import
import HomePage from "../ui/pages/home/Home";
import ProductDetailsPage from "../ui/pages/product/ProductDetails";
import ProductsLists from "../ui/pages/product/ProductsLists";
import CreateAdsProduct from "../ui/pages/product/CreateAdsProduct";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsLists /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
      { path: "/create-product", element: <CreateAdsProduct /> },
    ],
  },
]);

export default router;
