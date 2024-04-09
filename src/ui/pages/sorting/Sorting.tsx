import { useState } from "react";
import products from "../../../../public/assets/data";
import Search from "../../components/core/search/Search";
import SectionTitle from "../../components/core/sectionTitle/SectionTitle";
import SortingTab from "../../components/sortingTab/SortingTab";
import ProductItem from "../../components/product/ProductItem";

const SortingPage = (): JSX.Element => {
  const [allProducts, setAllProducts] = useState(products);
  const [sortingType, setSortingType] = useState("");

  console.log("allProducts->", allProducts);

  return (
    <section className="min-h-[90vh]">
      <div className="container">
        <SectionTitle message="Sort by price or area" />

        <SortingTab sortingType={sortingType} setSortingType={setSortingType} />

        <Search
          setData={setAllProducts}
          allData={products}
          sortingType={sortingType}
        />
        <p className="text-center mt-4">
          Homes {sortingType} below your entry {sortingType} will be displayed.
        </p>
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
