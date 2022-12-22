import { FieldType } from "src/types";

export type RadioFieldProps = {
  field: FieldType;
  value: any;
  setFieldValue: (name: string, value: any) => void;
  disabled: boolean;
};

const RadioField = ({
  field,
  value,
  setFieldValue,
  disabled,
}: RadioFieldProps) => {
  return (
    <div className="flex items-center justify-start mt-3">
      {field.options?.map((option) => (
        <label
          key={option.value}
          className="font-medium text-gray-700 cursor-pointer mr-4"
        >
          <input
            className="appearance-none rounded-full h-4 w-4 border-4 border-gray-300 bg-white  checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id={field.id}
            name={field.name}
            checked={value === option.value}
            type="radio"
            onChange={() => setFieldValue(field.name, option.value)}
            disabled={disabled}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioField;
