import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
