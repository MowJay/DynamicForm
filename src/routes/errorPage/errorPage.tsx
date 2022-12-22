import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};

const ErrorPage = () => {
  const error = useRouteError() as RouteError;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Oops!</h1>
        <p className="mt-4">Sorry, an unexpected error has occurred.</p>
        <p className="mt-2 italic">{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
