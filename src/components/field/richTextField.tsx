// @ts-ignore
import { CKEditor } from "@ckeditor/ckeditor5-react";
// @ts-ignore
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { FieldType } from "src/types";

export type RichTextFieldProps = {
  field: FieldType;
  value: any;
  setFieldValue: (name: string, value: any) => void;
  disabled?: boolean;
};

const RichTextField = ({ field, value, setFieldValue }: RichTextFieldProps) => {
  const editorConfiguration = {
    language: "en",
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "bulletedList",
      "numberedList",
      "blockQuote",
    ],
    placeholder: field.description,
  };

  return (
    <div className="mt-2">
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        onChange={(event: any, editor: { getData: () => void }) => {
          setFieldValue(field.name, editor.getData());
        }} // @ts-ignore
        onReady={(editor) => {
          // @ts-ignore
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "min-height",
              "200px",
              editor.editing.view.document.getRoot()
            );
            writer.setStyle(
              "border-width",
              "2px",
              editor.editing.view.document.getRoot()
            );
          });
        }}
      />
    </div>
  );
};

export default RichTextField;
