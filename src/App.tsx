import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Root from "./routes/root";
import ErrorPage from "./routes/errorPage";
import ContactPage from "./routes/contactPage";
import OrderPage from "./routes/orderPage";
import TicketPage from "./routes/ticketPage/ticketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact/:mode",
        element: <ContactPage />,
      },
      {
        path: "order/:mode",
        element: <OrderPage />,
      },
      {
        path: "ticket/:mode",
        element: <TicketPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
