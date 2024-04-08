import allProducts from "../../../public/assets/data";

const useIntendedProduct = () => {
  const intendedProduct = (productId: number) => {
    return allProducts.find((product) => product.id === productId);
  };

  return { intendedProduct };
};

export default useIntendedProduct;
