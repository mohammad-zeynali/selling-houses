import { useState } from "react";
import products from "../../../../public/assets/data";
import SectionTitle from "../../components/core/sectionTitle/SectionTitle";
import Search from "../../components/core/search/Search";
import ProductItem from "../../components/product/ProductItem";

const ProductsListsPage = (): JSX.Element => {
  const [allProducts, setAllProducts] = useState(products);
  console.log("allProducts->", allProducts);

  return (
    <section className="min-h-[90vh]">
      <div className="container">
        <SectionTitle message="all selling houses" />

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

export default ProductsListsPage;
