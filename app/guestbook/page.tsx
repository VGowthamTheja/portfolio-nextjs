import React from "react";
import Form from "../components/Form";
import { prisma } from "../db";

async function getEntries() {
  const data = await prisma.guestbook.findMany({
    take: 50,
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export const revalidate = 60;

async function Guestbook() {
  const data = await getEntries();

  return (
    <div className="">
      <Form />
      <div className="flex flex-col space-y-2 mt-8">
        {data.map((entry) => (
          <div
            className="flex items-center space-x-4 bg-teal-200 dark:bg-teal-700 py-2 px-5 rounded-md"
            key={entry.id}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm leading-8 font-medium text-gray-900 dark:text-gray-100">
                {entry.username}
              </p>
              <p className="text-sm leading-8 text-gray-500 dark:text-gray-300">
                {entry.message}
              </p>
            </div>
            <div className="flex-shrink-0">
              <p className="text-sm leading-5 text-gray-500 dark:text-gray-300">
                {new Date(entry.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guestbook;
