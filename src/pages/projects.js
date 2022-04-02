/* eslint-disable @next/next/no-img-element */
import projects from '@/data/projects';

import Link from '@/components/Common/Link';
import Tag from '@/components/Common/Tag';

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
            <Link
              key={project.title}
              href={project.links.demo}
              className="mb-2 flex flex-col rounded-lg shadow-lg dark:bg-zinc-900"
            >
              <img
                className="max-h-[200px] min-h-[200px] w-full rounded-t-lg object-cover"
                src={project.image}
                alt={project.title}
              />

              <div className="flex flex-1 flex-col gap-2 px-3 pt-3 pb-6">
                <div className="flex justify-between pb-2">
                  <Tag label={project.tag} type="info" />
                  <span className="dark:text-zinc-400">{project.release_year}</span>
                </div>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm dark:text-zinc-400">{project.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
