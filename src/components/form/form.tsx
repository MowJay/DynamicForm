import { useFormik } from "formik";

import { FieldType } from "src/types";
import Field from "./../field/field";
import { OperationModes } from "src/constants";
import { getValidationSchema } from "./utils";
import { mergeClasses } from "./../../utils/utils";

export type FormProps = {
  fields: FieldType[];
  containerCustomClass?: string;
  operationMode?: OperationModes;
  customFieldsOrder?: { [k: string]: number };
  initialValues?: { [k: string]: any };

  submitButtonText?: string;
  onSubmit?: (values: { [k: string]: any }) => void;
};

const Form = ({
  fields,
  containerCustomClass,
  operationMode,
  customFieldsOrder,
  submitButtonText = "Submit",
  onSubmit = () => {},
  initialValues,
}: FormProps) => {
  const getSubmitButtonExtraClass = (): string => {
    if (operationMode === OperationModes.EDIT)
      return "bg-yellow-600  hover:bg-yellow-700  focus:ring-yellow-500";
    else if (operationMode === OperationModes.DELETE)
      return "bg-red-600  hover:bg-red-700  focus:ring-red-500";

    return "bg-blue-600  hover:bg-blue-700  focus:ring-blue-500";
  };

  const mapFieldsToInitialValues = (fields: FieldType[]) => {
    const values: { [k: string]: any } = {};
    fields.forEach((field: FieldType) => {
      if (initialValues) {
        values[field.name] = initialValues[field.name];
      } else {
        values[field.name] = "";
      }
    });
    return values;
  };

  const sortFields = (fields: FieldType[]) => {
    if (customFieldsOrder) {
      return fields.sort(
        (field1, field2) =>
          customFieldsOrder[field1.name] - customFieldsOrder[field2.name]
      );
    }

    return fields;
  };

  const formik = useFormik({
    initialValues: mapFieldsToInitialValues(fields),
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: getValidationSchema(fields),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`m-2 md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 ${containerCustomClass}`}
      >
        {sortFields(fields).map((field: FieldType) => (
          <Field
            key={field.id}
            field={field}
            value={formik.values[field.name]}
            handleChange={formik.handleChange}
            setFieldValue={formik.setFieldValue}
            operationMode={operationMode}
            error={formik.errors[field.name]}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        {operationMode !== OperationModes.VIEW && (
          <button
            type="submit"
            className={mergeClasses(
              getSubmitButtonExtraClass(),
              "mr-4 inline-flex justify-center rounded-md border border-transparent py-2 px-6 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            )}
          >
            {submitButtonText}
          </button>
        )}
        {(operationMode === OperationModes.EDIT ||
          operationMode === OperationModes.New) && (
          <button
            type="reset"
            onClick={() => formik.setValues(mapFieldsToInitialValues(fields))}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Reset
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
