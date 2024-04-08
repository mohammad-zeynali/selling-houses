import { useParams } from "react-router-dom";
import ProductDetailsBox from "../../components/product/ProductDetailsBox";
import useIntendedProduct from "../../../application/products/intendedProduct";
import { useEffect, useState } from "react";
import { Product } from "../../../domain/product";

const ProductDetails = (): JSX.Element => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const { intendedProduct } = useIntendedProduct();

  useEffect(() => {
    setProduct(intendedProduct(+id!));
  }, [id]);

  return (
    <section>
      <div className="container">
        {product && <ProductDetailsBox {...product} />}
      </div>
    </section>
  );
};

export default ProductDetails;
