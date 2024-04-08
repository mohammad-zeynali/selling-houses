import { Product } from "../../../domain/product";

const ProductDetailsBox = ({
  image,
  title,
  area,
  price,
  description,
}: Product): JSX.Element => {
  return (
    <div className="flex flex-col py-10 max-w-3xl mx-auto">
      <img className="object-cover rounded-xl " src={`.${image}`} />
      <h5 className="font-openSansBold text-xl sm:text-3xl text-black mt-4">
        {title}
      </h5>
      <span className="flex justify-between items-center text-lg mt-4">
        <h5>{area} m</h5>
        <h6>{price} $</h6>
      </span>
      <p className=" mt-4 leading-8">{description}</p>
    </div>
  );
};

export default ProductDetailsBox;
