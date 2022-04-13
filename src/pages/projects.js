import Image from 'next/image';
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
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      <div className="absolute -left-6 top-0 hidden h-[calc(100%-40px)] min-h-[calc(100vh-40px)] w-[1px] border-l border-dashed border-zinc-300 dark:border-zinc-700 md:block"></div>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative flex flex-col rounded-lg shadow-xl dark:bg-zinc-900 sm:flex-row"
          >
            <aside className="absolute -left-12 top-1/2 hidden whitespace-nowrap text-zinc-400 [transform:translate(-50%,-50%)] [writing-mode:vertical-lr] dark:text-zinc-600 md:block">
              {project.release_year}
            </aside>

            <Image
              className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              objectFit="cover"
              unoptimized
              priority
              alt={project.title}
              src={project.image}
              width={300}
              height={200}
            />

            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="flex">
                <Tag label={project.tag} type="primary" />
              </div>

              <div className="flex flex-1 flex-col gap-2 pb-2">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm dark:text-zinc-400">{project.description}</p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Link
                  href={project.links.demo}
                  className="rounded-md p-2 font-bold text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
                >
                  View Demo
                </Link>

                <Link
                  href={project.links.repo}
                  className="rounded-md p-2 font-bold text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
                >
                  View Repo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
