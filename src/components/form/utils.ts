import * as Yup from "yup";

import { ValidationTypes } from "src/constants";
import { FieldType } from "src/types";

export function getValidationSchema(fields: FieldType[]) {
  const schema: { [k: string]: any } = {};

  fields.forEach((field) => {
    if (field.validationType === ValidationTypes.Phone) {
      schema[field.name] = Yup.string()
        .min(9, "Invalid phone number!")
        .max(9, "Invalid phone number!");
    } else if (field.validationType === ValidationTypes.Email) {
      schema[field.name] = Yup.string().email("Invalid email!");
    }

    if (field.required) {
      if (schema[field.name]) {
        schema[field.name] = schema[field.name].required(
          "This field is required!"
        );
      } else {
        schema[field.name] = Yup.string().required("This field is required!");
      }
    }
  });

  return Yup.object().shape(schema);
}
