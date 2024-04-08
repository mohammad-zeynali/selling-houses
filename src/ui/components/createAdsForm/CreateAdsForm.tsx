import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import CreateAdsField from "./CreateAdsField";

export type CreateAdsFormType = {
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  createNewAdsProduct: () => Promise<void>;
};

const CreateAdsForm = ({
  handleSubmit,
  register,
  errors,
  createNewAdsProduct,
}: CreateAdsFormType): JSX.Element => {
  return (
    <form
      className="max-w-3xl mx-auto p-5"
      onSubmit={handleSubmit(createNewAdsProduct)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 justify-items-center">
        <CreateAdsField name="title" register={register} errors={errors} />
        <CreateAdsField name="price" register={register} errors={errors} />
        <CreateAdsField name="area" register={register} errors={errors} />
        <CreateAdsField
          name="description"
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-green-500 text-xl text-white py-2 px-6 rounded-lg cursor-pointer">
          submit
        </button>
      </div>
    </form>
  );
};

export default CreateAdsForm;
