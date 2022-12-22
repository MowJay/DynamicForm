import {
  FieldTypes,
  OperationModes,
  ValidationTypes,
  DisplayFormats,
} from "../constants";

export type FieldType = {
  id: string;
  name: string;
  label: string;
  type: FieldTypes;
  description?: string;
  required?: boolean;
  displayAllowedOperations: OperationModes[];
  editAllowedOperations: OperationModes[];
  validationType?: ValidationTypes;
  displayFormat?: DisplayFormats;
  options?: { label: string; value: string }[];
};
