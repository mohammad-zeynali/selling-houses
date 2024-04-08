import { createBrowserRouter } from "react-router-dom";
import HomePage from "../ui/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
