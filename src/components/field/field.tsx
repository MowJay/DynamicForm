import { memo } from "react";

import { FieldType } from "src/types";
import { FieldTypes, OperationModes } from "src/constants";
import TextField from "./textField";
import DateField from "./dateField";
import SelectField from "./selectField";
import RadioField from "./radioField";
import CheckBoxField from "./checkBoxField";
import RichTextField from "./richTextField";
import FieldLabel from "./fieldLabel";

export type FieldProps = {
  field: FieldType;
  value: any;
  error: any;
  handleChange: (e: any) => void;
  setFieldValue: (name: string, value: any) => void;
  operationMode?: OperationModes;
};

const Field = ({
  field,
  value,
  error,
  handleChange,
  setFieldValue,
  operationMode,
}: FieldProps) => {
  let result = null;

  if (!operationMode || !field.displayAllowedOperations.includes(operationMode))
    return null;

  const disabled = !field.editAllowedOperations.includes(operationMode);

  switch (field.type) {
    case FieldTypes.TEXT:
      result = (
        <TextField
          field={field}
          value={value}
          handleChange={handleChange}
          disabled={disabled}
        />
      );
      break;
    case FieldTypes.NUMBER:
      result = (
        <TextField
          field={field}
          value={value}
          handleChange={handleChange}
          disabled={disabled}
        />
      );
      break;
    case FieldTypes.RICH_TEXT:
      result = (
        <RichTextField
          field={field}
          value={value}
          setFieldValue={setFieldValue}
          disabled={disabled}
        />
      );
      break;
    case FieldTypes.DATE:
      result = (
        <DateField
          field={field}
          value={value}
          handleChange={handleChange}
          disabled={disabled}
        />
      );
      break;
    case FieldTypes.SELECT:
      result = (
        <SelectField
          field={field}
          value={value}
          handleChange={handleChange}
          disabled={disabled}
        />
      );
      break;
    case FieldTypes.RADIO:
      result = (
        <RadioField
          field={field}
          value={value}
          setFieldValue={setFieldValue}
          disabled={disabled}
        />
      );
      break;
    case FieldTypes.CHECKBOX:
      result = (
        <CheckBoxField
          field={field}
          value={value}
          setFieldValue={setFieldValue}
          disabled={disabled}
        />
      );
      break;
    default:
      result = null;
  }

  return (
    <div
      className={`mt-6 md:mt-0 ${
        field.type === FieldTypes.RICH_TEXT ? "col-span-3" : "col-span-1"
      }`}
    >
      <FieldLabel id={field.id} label={field.label} required={field.required} />
      {result}
      <p className="text-sm font-normal mt-1 text-red-500">{error}</p>
    </div>
  );
};

export default memo(Field);
