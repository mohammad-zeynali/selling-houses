import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-light pt-12">
        <Outlet />
      </div>
    </>
  );
};

export default App;
