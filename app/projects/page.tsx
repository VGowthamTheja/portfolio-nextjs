import React from "react";
import { sanityClient } from "../lib/sanity";
import Image from "next/image";

interface Project {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getProjects(): Promise<Project[]> {
  const query = `
    *[_type=="project"] {
        title,
        overview,
        link,
        _id,
        "imageUrl": image.asset->url
      }
    `;

  const data = await sanityClient.fetch(query);

  return data;
}

async function Projects() {
  const data = await getProjects();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl  sm:leading-10 md:text-6xl md:leading-14">
          All Projects
        </h1>
      </div>

      <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100"
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="w-full h-full object-cover object-top border-b border-gray-200 dark:border-gray-700"
              />
            </div>

            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="group mt-4 flex justify-start items-center gap-1 text-sm font-medium text-teal-500"
              >
                <span>Learn more!</span>
                <span className="block transition-all group-hover:ms-0.5">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                  </svg>
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
