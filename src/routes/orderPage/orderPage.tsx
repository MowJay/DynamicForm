import Form from "src/components/form";
import { orderFormFields } from "./../../mock/orderFormFields";
import useMode from "./../../hooks/useMode/useMode";

const OrderPage = () => {
  const mode = useMode();

  return (
    <div>
      <Form
        fields={orderFormFields}
        containerCustomClass=""
        operationMode={mode}
        customFieldsOrder={{
          productCode: 1,
          amount: 2,
          deliveryPeriod: 3,
          paymentMethod: 4,
        }}
        initialValues={{
          productCode: "MK 123",
          amount: 100000,
          onlinePayment: true,
          deliveryPeriod: "2022-12-27",
        }}
      />
    </div>
  );
};

export default OrderPage;
