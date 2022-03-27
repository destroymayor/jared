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
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <div className="flex flex-col flex-wrap gap-5 md:flex-row">
        {projects.map((project, index) => {
          const animationDelay = `${index * 20}ms`;

          return (
            <FadeInSection
              key={project.title}
              className="mb-2 flex flex-col rounded-lg shadow-lg dark:bg-zinc-900 md:w-80"
              delay={animationDelay}
            >
              <img
                className="max-h-[200px] min-h-[200px] w-full rounded-t-lg object-cover"
                src={project.image}
                alt={project.title}
              />

              <div className="flex flex-1 flex-col justify-between p-3">
                <div>
                  <div className="flex flex-col items-start gap-1">
                    <Tag label={project.tag} type="info" />
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                  </div>
                  <p className="py-1 text-sm dark:text-zinc-400">{project.description}</p>
                </div>
                <div className="flex divide-x py-2 dark:divide-zinc-500">
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
