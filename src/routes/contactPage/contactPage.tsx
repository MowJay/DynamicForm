import Form from "src/components/form";
import { contactFormFields } from "./../../mock/contactFormFIelds";
import useMode from "./../../hooks/useMode/useMode";

const ContactPage = () => {
  const mode = useMode();

  return (
    <div>
      <Form
        fields={contactFormFields}
        containerCustomClass=""
        operationMode={mode}
        initialValues={{
          firstName: "Alfred",
          lastName: "Morris",
          phone: 489930187,
          email: "Alfred@gmail.com",
          gender: "male",
          birthDate: "1996-06-11",
          address: "9356 Grant CourtQueensbury, NY 12804",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
};

export default ContactPage;
