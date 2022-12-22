import { OperationModes, FieldTypes, DisplayFormats } from "src/constants";

export const orderFormFields = [
  {
    id: "0",
    name: "productCode",
    label: "Product Code",
    type: FieldTypes.TEXT,
    description: "Enter product code",
    required: true,
    displayAllowedOperations: [
      OperationModes.VIEW,
      OperationModes.New,
      OperationModes.EDIT,
      OperationModes.DELETE,
    ],
    editAllowedOperations: [OperationModes.New, OperationModes.EDIT],
  },
  {
    id: "1",
    name: "amount",
    label: "Amount",
    type: FieldTypes.NUMBER,
    description: "Enter order amount",
    required: true,
    displayFormat: DisplayFormats.NumberWithCommas,
    displayAllowedOperations: [
      OperationModes.VIEW,
      OperationModes.New,
      OperationModes.EDIT,
      OperationModes.DELETE,
    ],
    editAllowedOperations: [OperationModes.New, OperationModes.EDIT],
  },
  {
    id: "2",
    name: "onlinePayment",
    label: "Payment Method",
    type: FieldTypes.CHECKBOX,
    description: "Pay online",
    displayAllowedOperations: [
      OperationModes.VIEW,
      OperationModes.New,
      OperationModes.EDIT,
      OperationModes.DELETE,
    ],
    editAllowedOperations: [OperationModes.New, OperationModes.EDIT],
  },
  {
    id: "3",
    name: "deliveryPeriod",
    label: "Delivery Period",
    type: FieldTypes.DATE_Range,
    description: "Choose delivery period",
    required: true,
    displayAllowedOperations: [
      OperationModes.VIEW,
      OperationModes.New,
      OperationModes.EDIT,
      OperationModes.DELETE,
    ],
    editAllowedOperations: [OperationModes.New, OperationModes.EDIT],
  },
];
