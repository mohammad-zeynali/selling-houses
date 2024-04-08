export type Product = {
  id: UniqId;
  title: string;
  price: number;
  image: string;
  area: number;
  description: string;
};
export type AllProducts = Product[];

export const searchProduct = (title: string, products: AllProducts) => {
  if (title?.length > 1) {
    return products.filter((product) => product.title === title);
  } else {
    return products;
  }
};

export const sortingProductByPrice = (price: number, products: AllProducts) => {
  return products.filter((product) => product.price < price);
};

export const sortingProductByArea = (area: number, products: AllProducts) => {
  return products.filter((product) => product.area < area);
};
