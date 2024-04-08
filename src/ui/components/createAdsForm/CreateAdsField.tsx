import { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type CreateAdsFieldType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
};
const CreateAdsField = ({ register, errors, name }: CreateAdsFieldType) => {
  const error = errors[name];
  return (
    <div className="w-full">
      <label htmlFor={name} className="pb-2">
        {name} *
      </label>
      <input
        {...register(name, { required: `The ${name} field is required` })}
        type="text"
        id={name}
        name={name}
        className="bg-white border border-solid border-slate-500 w-full rounded-lg p-2 mt-1"
        placeholder={`enter ${name} ...`}
      />
      {error && (
        <span className="text-red-600 block text-sm  mt-1">
          {error?.message as ReactNode}
        </span>
      )}
    </div>
  );
};

export default CreateAdsField;
