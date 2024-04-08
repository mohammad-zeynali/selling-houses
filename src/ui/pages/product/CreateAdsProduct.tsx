import { useForm } from "react-hook-form";
import CreateAdsForm from "../../components/createAdsForm/CreateAdsForm";

const CreateAdsProduct = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createNewAdsProduct = async () => {};
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

export default CreateAdsProduct;
