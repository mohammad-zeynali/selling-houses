import { Product } from "../../domain/product";
import { useLocalStorageMange } from "../../services/storageAdapter";

export const useCreateProduct = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorageMange();
  const longProducts = getLocalStorage("products");

  const createProduct = (newProduct: Product) => {
    setLocalStorage("products", [...longProducts, newProduct]);
    alert("آگهی اضافه شد");
    window.location.href = "/products";
  };

  return { createProduct };
};
