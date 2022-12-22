import { Outlet } from "react-router-dom";

import Header from "src/components/header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
