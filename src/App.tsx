import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-light">
        <Outlet />
      </div>
    </>
  );
};

export default App;
