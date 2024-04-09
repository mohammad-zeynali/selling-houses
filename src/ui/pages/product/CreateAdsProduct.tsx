import { FieldValues, useForm } from "react-hook-form";
import { Product } from "../../../domain/product";
import { useCreateProduct } from "../../../application/products/createProduct";
import SectionTitle from "../../components/core/sectionTitle/SectionTitle";
import CreateAdsForm from "../../components/createAdsForm/CreateAdsForm";

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
        <SectionTitle message="register new house ads" />

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
