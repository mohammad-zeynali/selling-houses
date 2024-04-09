import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";
import { useStore } from "./contexts/store";
import { useSetProductsToLocalStorage } from "./application/products/createProduct";
import { useEffect } from "react";

const App = () => {
  const { setProducts } = useSetProductsToLocalStorage();
  const { isShowMobileNavbar, setIsShowMobileNavbar } = useStore();

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <>
      <div
        className={isShowMobileNavbar ? "overlay" : ""}
        onClick={() => setIsShowMobileNavbar(false)}
      ></div>
      <Header />
      <div className="bg-light sm:pt-12">
        <Outlet />
      </div>
    </>
  );
};

export default App;
