/* eslint-disable @next/next/no-img-element */
import projects from '@/data/projects';

import FadeInSection from '@/components/Common/FadeInSection';
import Link from '@/components/Common/Link';
import Tag from '@/components/Common/Tag';
import { GithubIcon } from '@/components/Common/Icons';
import { LinkIcon } from '@heroicons/react/outline';

const title = `Projects`;
const description = `My side projects.`;

Projects.title = title;
Projects.description = description;

export default function Projects() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl">{title}</h1>
      <p className="mb-6 border-b border-dashed border-zinc-600 py-4 dark:text-zinc-400">
        {description}
      </p>

      <div className="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          return (
            <FadeInSection
              key={project.title}
              className="mb-2 flex flex-col rounded-lg shadow-lg dark:bg-zinc-900"
            >
              <img
                className="max-h-[200px] min-h-[200px] w-full rounded-t-lg object-cover"
                src={project.image}
                alt={project.title}
              />

              <div className="flex flex-1 flex-col justify-between p-3">
                <div>
                  <div className="flex justify-between pb-2">
                    <Tag label={project.tag} type="info" />
                    <span className="dark:text-zinc-400">{project.release_year}</span>
                  </div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="py-1 text-sm dark:text-zinc-400">{project.description}</p>
                </div>
                <div className="flex divide-x p-2 dark:divide-zinc-500">
                  <Link aria-label="github link" href={project.links.repo}>
                    <div className="flex items-center gap-2 pr-4 hover:underline">
                      <GithubIcon className="h-5 w-5" />
                      <span>Github</span>
                    </div>
                  </Link>

                  <Link aria-label="demo link" href={project.links.demo}>
                    <div className="flex items-center gap-2 pl-4 hover:underline">
                      <LinkIcon className="h-5 w-5" />
                      <span>Demo</span>
                    </div>
                  </Link>
                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </>
  );
}
