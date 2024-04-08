import { FieldValues, useForm } from "react-hook-form";
import CreateAdsForm from "../../components/createAdsForm/CreateAdsForm";
import { useCreateProduct } from "../../../application/products/createProduct";
import { Product } from "../../../domain/product";

export type CreateProductFiledType = {
  title: string;
  price: string;
  area: string;
  description: string;
};

const CreateAdsProductPage = (): JSX.Element => {
  const { createProduct } = useCreateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createNewAdsProduct = async (data: FieldValues) => {
    console.log("createNewAdsProduct=> ", data);
    const submitData = {
      ...data,
      id: Math.floor(Math.random() * 1_000_000_000_000),
      image: "./assets/images/houses/house_9.jpg",
    } as Product;
    createProduct(submitData);
  };
  return (
    <section className="min-h-[90vh]">
      <div className="container px-0">
        <h1 className="mx-auto text-2xl font-openSansBold pt-8 border-b-2 border-solid border-danger w-fit pb-2">
          register new house ads
        </h1>
        <CreateAdsForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          createNewAdsProduct={createNewAdsProduct}
        />
      </div>
    </section>
  );
};

export default CreateAdsProductPage;
