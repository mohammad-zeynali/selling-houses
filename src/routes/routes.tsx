import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// pages import
import HomePage from "../ui/pages/home/Home";
import ProductDetailsPage from "../ui/pages/product/ProductDetails";
import ProductsListsPage from "../ui/pages/product/ProductsLists";
import CreateAdsProductPage from "../ui/pages/product/CreateAdsProduct";
import SortingPage from "../ui/pages/sorting/Sorting";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsListsPage /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
      { path: "/create-product", element: <CreateAdsProductPage /> },
      { path: "/sorting", element: <SortingPage /> },
    ],
  },
]);

export default router;
