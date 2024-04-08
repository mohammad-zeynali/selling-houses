export type Product = {
  id: UniqId;
  title: string;
  price: number;
  image: string;
  area: number;
  description: string;
};
export type AllProducts = Product[];

export const addProductAds = (products: AllProducts, product: Product) => {
  return { ...products, products: [...products, product] };
};

export const searchProduct = (title: string, products: AllProducts) => {
  return products.filter((product) => product.title === title);
};

export const sortingProductByPrice = (price: number, products: AllProducts) => {
  return products.filter((product) => product.price < price);
};

export const sortingProductByArea = (area: number, products: AllProducts) => {
  return products.filter((product) => product.area === area);
};
