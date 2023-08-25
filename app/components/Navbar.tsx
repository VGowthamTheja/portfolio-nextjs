"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  let pathname = usePathname() || "";
  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href={"/"}>
                    <h1 className="text-2xl font-medium">
                      Gowtham <span className="text-teal-500">Theja</span>
                    </h1>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href={"/"}
                    prefetch
                    className={`${
                      pathname === "/"
                        ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-gray-700"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href={"/guestbook"}
                    prefetch
                    className={`${
                      pathname === "/guestbook"
                        ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-gray-700"
                    }`}
                  >
                    Guestbook
                  </Link>
                  <Link
                    href={"/projects"}
                    prefetch
                    className={`${
                      pathname === "/projects"
                        ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-gray-700"
                    }`}
                  >
                    Projects
                  </Link>
                  <ThemeButton />
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <ThemeButton />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href={"/"}
                prefetch
                className={`${
                  pathname === "/"
                    ? "bg-teal-500 text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-700 hover:bg-gray-300 hover:text-black dark:text-white dark:hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                }`}
              >
                Home
              </Link>
              <Link
                href={"/guestbook"}
                prefetch
                className={`${
                  pathname === "/guestbook"
                    ? "bg-teal-500 text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-700 hover:bg-gray-300 hover:text-black dark:text-white dark:hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                }`}
              >
                Guestbook
              </Link>
              <Link
                href={"/projects"}
                prefetch
                className={`${
                  pathname === "/projects"
                    ? "bg-teal-500 text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-700 hover:bg-gray-300 hover:text-black dark:text-white dark:hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                }`}
              >
                Projects
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
