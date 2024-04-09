import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";
import { useEffect } from "react";
import { useLocalStorageMange } from "./services/storageAdapter";
import { productData } from "../public/assets/data";
import { useStore } from "./contexts/store";
import { Product } from "./domain/product";

const App = () => {
  // create as custom hook and rusable
  const { getLocalStorage, setLocalStorage } =
    useLocalStorageMange<Product[]>();
  const { isShowMobileNavbar, setIsShowMobileNavbar } = useStore();
  useEffect(() => {
    const oldProducts = getLocalStorage("products") || [];
    if (oldProducts?.length > 0) {
      setLocalStorage("products", [...oldProducts]);
    } else {
      setLocalStorage("products", [...productData]);
      window.location.reload();
    }
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
