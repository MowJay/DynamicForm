import Form from "src/components/form";
import { ticketFormFields } from "./../../mock/ticketFormFields";
import useMode from "./../../hooks/useMode/useMode";

const TicketPage = () => {
  const mode = useMode();

  return (
    <div>
      <Form
        fields={ticketFormFields}
        containerCustomClass="p-3 bg-gray-100 rounded-md"
        operationMode={mode}
        initialValues={{
          topic: "submit bug",
          priority: "high",
        }}
      />
    </div>
  );
};

export default TicketPage;
