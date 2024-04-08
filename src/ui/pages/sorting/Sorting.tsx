import { useState } from "react";
import products from "../../../../public/assets/data";
import ProductItem from "../../components/product/ProductItem";
import Search from "../../components/search/Search";

const SortingPage = (): JSX.Element => {
  const [allProducts, setAllProducts] = useState(products);
  const [sortingType, setSortingType] = useState("");

  console.log("allProducts->", allProducts);

  return (
    <section className="min-h-[90vh]">
      <div className="container">
        <h1 className="mx-auto text-2xl font-openSansBold pt-8 border-b-2 border-solid border-danger w-fit pb-2">
          Sort by price or area
        </h1>

        <ul className="max-w-sm mx-auto grid gap-4 sm:grid-cols-2 mt-4">
          {["by price", "by area"].map((item) => (
            <li
              onClick={() => setSortingType(item)}
              className={`${
                item === sortingType ? "bg-danger text-white" : "bg-white"
              } text-center py-2 rounded-lg cursor-pointer font-openSansBold`}
            >
              {item}
            </li>
          ))}
        </ul>

        <Search
          setData={setAllProducts}
          allData={products}
          sortingType={sortingType}
        />
        <p className="text-center mt-4">
          List of houses lower than the entered price{" "}
          {sortingType === "by price" ? "price" : "area"}
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
