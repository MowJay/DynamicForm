import { FieldTypes } from "src/constants";
import { FieldType } from "src/types";
import { convertValueToDisplayFormat, removeNonNumeric } from "./utils";

export type TextFieldProps = {
  field: FieldType;
  value: any;
  handleChange: (e: any) => void;
  disabled: boolean;
};

const TextField = ({
  field,
  value,
  handleChange,
  disabled,
}: TextFieldProps) => {
  const onChange = (e: { target: { value: string } }) => {
    const event = { ...e };
    if (field.type === FieldTypes.NUMBER)
      event.target.value = removeNonNumeric(event.target.value);

    handleChange(e);
  };

  return (
    <input
      className="mt-1 font-medium text-gray-900 p-2 block w-full border-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      id={field.id}
      name={field.name}
      value={convertValueToDisplayFormat(value, field.displayFormat)}
      onChange={onChange}
      type="text"
      placeholder={field.description}
      disabled={disabled}
    />
  );
};

export default TextField;
