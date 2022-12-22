import { OperationModes, FieldTypes } from "src/constants";

export const ticketFormFields = [
  {
    id: "0",
    name: "topic",
    label: "Topic",
    type: FieldTypes.TEXT,
    description: "Enter ticket topic",
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
    name: "priority",
    label: "Priority",
    type: FieldTypes.SELECT,
    description: "Enter ticket priority",
    required: true,
    displayAllowedOperations: [
      OperationModes.VIEW,
      OperationModes.New,
      OperationModes.EDIT,
      OperationModes.DELETE,
    ],
    editAllowedOperations: [OperationModes.New, OperationModes.EDIT],
    options: [
      { label: "High", value: "high" },
      { label: "Medium", value: "medium" },
      { label: "Low", value: "low" },
    ],
  },
  {
    id: "2",
    name: "description",
    label: "Description",
    type: FieldTypes.RICH_TEXT,
    description: "Enter ticket description",
    displayAllowedOperations: [
      OperationModes.VIEW,
      OperationModes.New,
      OperationModes.EDIT,
      OperationModes.DELETE,
    ],
    editAllowedOperations: [OperationModes.New, OperationModes.EDIT],
  },
];
