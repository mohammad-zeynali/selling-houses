import { Link } from "react-router-dom";
import { Product } from "../../../domain/product";

const ProductItem = ({ id, image, title, price, description }: Product) => {
  return (
    <Link
      to={`/products/${id}`}
      key={id}
      className="bg-white shadow-md rounded-lg p-3 flex flex-col"
    >
      <div className="">
        <img
          className="w-full object-cover rounded-lg h-56"
          src={image}
          alt="product image "
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <h5 className="font-openSansBold text-lg">{title}</h5>
        <h6>{price} $</h6>
      </div>
      <p className=" mt-4">{description.slice(0, 150)} ...</p>
    </Link>
  );
};

export default ProductItem;
