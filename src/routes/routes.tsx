import { createBrowserRouter } from "react-router-dom";
import HomePage from "../ui/pages/home/Home";
import App from "../App";

const router = createBrowserRouter([
  { element: <App />, children: [{ path: "/", element: <HomePage /> }] },
]);

export default router;
