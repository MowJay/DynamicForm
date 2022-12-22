import { FieldType } from "src/types";

export type SelectFieldProps = {
  field: FieldType;
  value: any;
  handleChange: (e: any) => void;
  disabled: boolean;
};

const SelectField = ({
  field,
  value,
  handleChange,
  disabled,
}: SelectFieldProps) => {
  return (
    <div>
      <select
        className="mt-1 font-medium text-gray-900 p-2 block w-full border-2 rounded-md border-gray-300 shadow-sm  focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        name={field.name}
        id={field.id}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
