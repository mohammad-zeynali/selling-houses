import products from "../../../../public/assets/data/index";
import ProductItem from "../../components/product/ProductItem";
import SectionTitle from "../../components/core/sectionTitle/SectionTitle";

const HomePage = (): JSX.Element => {
  return (
    <section className="min-h-[90vh]">
      <div className="container">
        <SectionTitle message="popular selling houses" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-6 pb-12">
          {products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
