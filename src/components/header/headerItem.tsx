import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { mergeClasses } from "src/utils/utils";

export type HeaderItemPropTypes = {
  title: string;
  basePath: string;
  items: { label: string; to: string }[];
};

const HeaderItem = ({ title, basePath, items }: HeaderItemPropTypes) => {
  const isItemActive = useLocation().pathname.split("/")[1] === basePath;

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={mergeClasses(
              open || isItemActive ? "text-gray-900" : "text-gray-500",
              isItemActive ? "bg-gray-100" : "",
              "group inline-flex items-center bg-white text-base font-medium hover:text-gray-900 focus:outline-none px-2 py-1 rounded-md"
            )}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={`${
                open || isItemActive ? "text-gray-900" : "text-gray-500"
              } ml-2 h-5 w-5 group-hover:text-gray-900`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white px-4 py-2 sm:gap-4 sm:p-2">
                  {items.map((item) => (
                    <NavLink
                      key={item.label}
                      to={basePath + "/" + item.to}
                      className={({ isActive }) =>
                        mergeClasses(
                          isActive
                            ? "bg-gray-100 hover:bg-gray-100 text-gray-900"
                            : "text-gray-500 hover:bg-gray-50",
                          "flex items-start rounded-lg"
                        )
                      }
                    >
                      <div className="px-6 py-2">
                        <p className="text-base font-medium  hover:text-gray-900">
                          {item.label}
                        </p>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default HeaderItem;
