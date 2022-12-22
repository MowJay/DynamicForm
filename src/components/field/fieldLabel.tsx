export type FieldLabelProps = {
  id: string;
  label: string;
  required?: boolean;
};

const FieldLabel = ({ id, label, required }: FieldLabelProps) => {
  return (
    <label
      className="block font-medium text-gray-700 cursor-pointer"
      htmlFor={id}
    >
      {label}
      {required ? <span className="text-lg text-gray-700"> *</span> : null}
    </label>
  );
};

export default FieldLabel;
