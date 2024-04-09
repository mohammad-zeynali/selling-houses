import { Product } from "../../domain/product";
import { useLocalStorageMange } from "../../services/storageAdapter";
import { productData } from "../../../public/assets/data";

export const useCreateProduct = () => {
  const { getLocalStorage, setLocalStorage } =
    useLocalStorageMange<Product[]>();
  const oldProducts = getLocalStorage("products");

  const createProduct = (newProduct: Product) => {
    setLocalStorage("products", [...oldProducts, newProduct]);
    alert("آگهی اضافه شد");
    // convert navigate()
    window.location.href = "/products";
  };

  return { createProduct };
};

export const useSetProductsToLocalStorage = () => {
  const { getLocalStorage, setLocalStorage } =
    useLocalStorageMange<Product[]>();
  const setProducts = () => {
    const oldProducts = getLocalStorage("products") || [];
    if (oldProducts?.length > 0) {
      setLocalStorage("products", [...oldProducts]);
    } else {
      setLocalStorage("products", [...productData]);
      window.location.reload();
    }
  };
  return { setProducts };
};
