import { FieldType } from "src/types";

export type CheckBoxFieldProps = {
  field: FieldType;
  value: any;
  setFieldValue: (name: string, value: any) => void;
  disabled: boolean;
};

const CheckBoxField = ({
  field,
  value,
  setFieldValue,
  disabled,
}: CheckBoxFieldProps) => {
  return (
    <div className="flex items-center justify-start mt-3">
      <label className="font-medium text-gray-700 cursor-pointer">
        <input
          className="mr-2 cursor-pointer"
          id={field.id}
          name={field.name}
          checked={value}
          type="checkbox"
          onChange={() => setFieldValue(field.name, !value)}
          disabled={disabled}
        />
        {field.description}
      </label>
    </div>
  );
};

export default CheckBoxField;
