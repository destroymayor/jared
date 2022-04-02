/* eslint-disable @next/next/no-img-element */
import projects from '@/data/projects';

import Link from '@/components/Common/Link';
import Tag from '@/components/Common/Tag';
import { GithubIcon } from '@/components/Common/Icons';

const title = `Projects`;
const description = `My side projects.`;

Projects.title = title;
Projects.description = description;

export default function Projects() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl">{title}</h1>
      <p className="mb-6 border-b border-dashed border-zinc-600 pt-2 pb-6 dark:text-zinc-400">
        {description}
      </p>

      <div className="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="mb-2 flex flex-col rounded-lg shadow-lg dark:bg-zinc-900"
            >
              <img
                className="max-h-[200px] min-h-[200px] w-full rounded-t-lg object-cover"
                src={project.image}
                alt={project.title}
              />

              <div className="flex flex-1 flex-col px-3 pt-3 pb-6">
                <div className="flex items-center justify-between">
                  <Tag label={project.tag} type="info" />
                  <Link href={project.links.demo}>
                    <GithubIcon className="w7 h-7 hover:text-zinc-600 dark:hover:text-zinc-400" />
                  </Link>
                </div>

                <div className="flex flex-col gap-2 py-2">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm dark:text-zinc-400">{project.description}</p>
                </div>

                <div className="flex flex-1 items-end justify-center py-2">
                  <Link href={project.links.demo}>
                    <div className="rounded-md bg-blue-500 py-2 px-6 text-zinc-50 transition duration-200 ease-in-out hover:bg-blue-600">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
