import { FieldType } from "src/types";

export type DateRangeFieldProps = {
  field: FieldType;
  value: any;
  handleChange: (e: any) => void;
  disabled: boolean;
};

const DateRangeField = ({
  field,
  value,
  handleChange,
  disabled,
}: DateRangeFieldProps) => {
  return (
    <input
      className="mt-1 font-medium text-gray-900 p-2 block w-full border-2 rounded-md border-gray-300 bor shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      id={field.id}
      name={field.name}
      value={value ? value : new Date().toJSON().slice(0, 10)}
      onChange={handleChange}
      type="date"
      disabled={disabled}
    />
  );
};

export default DateRangeField;
