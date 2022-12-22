import { NavLink, useLocation } from "react-router-dom";

import { mergeClasses } from "src/utils/utils";

export type HeaderMenuItemPropTypes = {
  title: string;
  basePath: string;
  items: { label: string; to: string }[];
};

const HeaderMenuItem = ({
  title,
  basePath,
  items,
}: HeaderMenuItemPropTypes) => {
  const isItemActive = useLocation().pathname.split("/")[1] === basePath;

  return (
    <div>
      <div
        className={mergeClasses(
          isItemActive ? "bg-gray-100" : "",
          "px-2 text-lg font-medium text-gray-900"
        )}
      >
        {title}
      </div>
      <div className="py-2 grid grid-cols-2 px-5">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={basePath + "/" + item.to}
            className={({ isActive }) =>
              mergeClasses(
                isActive ? "bg-gray-50 text-gray-900" : "text-gray-500",
                "text-base font-medium hover:text-gray-900 hover:bg-gray-50 py-1 px-2"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HeaderMenuItem;
