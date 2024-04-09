import { Product } from "../../domain/product";
import { useLocalStorageMange } from "../../services/storageAdapter";

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
