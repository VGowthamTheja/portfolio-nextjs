"use client";

import { useState, useRef } from "react";
import { postEntry } from "../action";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const pending = useFormStatus();

  async function addEntry(formData: FormData) {
    await postEntry(formData);
    formRef.current?.reset();
  }
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 space-y-2 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Guestbook
        </h1>
      </div>
      <div className="w-full">
        <div className="max-w-[500px] mx-auto mt-8">
          <form ref={formRef} action={addEntry} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="username"
                  className="form-input block w-full sm:text-sm sm:leading-5 text-black rounded-md"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="form-input block w-full sm:text-sm sm:leading-5 text-black rounded-md"
                  placeholder="Hello there!"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={pending.pending}
                  className="inline-flex justify-center cursor-pointer py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:border-teal-600 focus:shadow-outline-teal active:bg-teal-600 transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
