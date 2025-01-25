import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormError } from "./FormError";

interface CheckboxProps {
  id: string;
  label: React.ReactNode;
  register: ReturnType<UseFormRegister<FieldValues>>;
  error?: string;
}

// THis shared compoenent has to be used with React Hook Form
export const Checkbox: React.FC<CheckboxProps> = ({ id, label, register, error }) => {
  return (
    <div className="flex flex-col gap-2">
    <div className="flex items-center gap-4">
      <div className="group grid size-4 grid-cols-1 shrink-0">
        <input
          type="checkbox"
          id={id}
          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-teal-700 checked:bg-teal-700 indeterminate:border-teal-700 indeterminate:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
          {...register}
        />
        <svg
          fill="none"
          viewBox="0 0 14 14"
          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-[:checked]:opacity-100"
          />
          <path
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-[:indeterminate]:opacity-100"
          />
        </svg>
      </div>
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
    </div>
    {error && <FormError>{error}</FormError>}
  </div>
  );
};


