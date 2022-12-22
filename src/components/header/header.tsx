import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/20/solid";
import HeaderItem from "./headerItem";
import HeaderMenuItem from "./headerMenuItem";

const headerItems = [
  {
    title: "Contact",
    basePath: "contact",
    items: [
      { label: "View", to: "view" },
      { label: "New", to: "new" },
      { label: "Edit", to: "edit" },
      { label: "Delete", to: "delete" },
    ],
  },
  {
    title: "Order",
    basePath: "order",
    items: [
      { label: "View", to: "view" },
      { label: "New", to: "new" },
      { label: "Edit", to: "edit" },
      { label: "Delete", to: "delete" },
    ],
  },
  {
    title: "Ticket",
    basePath: "ticket",
    items: [
      { label: "View", to: "view" },
      { label: "New", to: "new" },
      { label: "Edit", to: "edit" },
      { label: "Delete", to: "delete" },
    ],
  },
];

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 md:space-x-10 md:justify-around">
          <div className="flex justify-start items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dynamic Forms</h1>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {headerItems.map((headerItem) => (
              <HeaderItem
                key={headerItem.title}
                title={headerItem.title}
                basePath={headerItem.basePath}
                items={headerItem.items}
              />
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 py-2 flex items-center justify-end">
              <Popover.Button className="-mr-3 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            {headerItems.map((headerItem) => (
              <HeaderMenuItem
                key={headerItem.title}
                title={headerItem.title}
                basePath={headerItem.basePath}
                items={headerItem.items}
              />
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
