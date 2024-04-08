import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";
import { useEffect } from "react";
import { useLocalStorageMange } from "./services/storageAdapter";
import { productData } from "../public/assets/data";
import { useStore } from "./contexts/store";

const App = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorageMange();
  const { isShowMobileNavbar, setIsShowMobileNavbar } = useStore();
  useEffect(() => {
    const longProductData = getLocalStorage("products") || [];
    if (longProductData?.length > 0) {
      setLocalStorage("products", [...longProductData]);
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
