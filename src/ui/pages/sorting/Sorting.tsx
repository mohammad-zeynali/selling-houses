import { useState } from "react";
import products from "../../../../public/assets/data";
import ProductItem from "../../components/product/ProductItem";
import Search from "../../components/search/Search";

const SortingPage = (): JSX.Element => {
  const [allProducts, setAllProducts] = useState(products);
  console.log("allProducts->", allProducts);

  return (
    <section className="min-h-[90vh]">
      <div className="container">
        <h1 className="mx-auto text-2xl font-openSansBold pt-8 border-b-2 border-solid border-danger w-fit pb-2">
          Sort by price or area
        </h1>

        <ul></ul>

        <Search setData={setAllProducts} allData={products} />

        {allProducts?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-6 pb-12">
            {allProducts.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <span className="flex justify-center text-danger py-4">
            Not product found😌😔
          </span>
        )}
      </div>
    </section>
  );
};

export default SortingPage;
