import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";
import { useEffect } from "react";
import { useLocalStorageMange } from "./services/storageAdapter";
import { productData } from "../public/assets/data";

const App = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorageMange();
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
      <Header />
      <div className="bg-light pt-12">
        <Outlet />
      </div>
    </>
  );
};

export default App;
