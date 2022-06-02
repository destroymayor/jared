import Image from 'next/image';
import projects from '@/data/projects';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';

import clsx from 'clsx';
import { GlobeIcon, GithubIcon } from '@/components/FeatherIcons';

const title = `Projects`;
const description = `Internet thingies built with React, Next.js.`;
export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((project, projectIndex) => {
        const { title, description, release_year, image, links } = project;

        const getReverseItem = projectIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';

        return (
          <div
            key={title}
            className={clsx(
              'flex flex-col rounded-md py-2 shadow-lg dark:bg-zinc-900/20 md:px-2 md:py-4',
              getReverseItem
            )}
          >
            <div className="flex flex-[1.5] flex-col">
              <Image
                className="rounded-md"
                objectFit="contain"
                unoptimized
                priority
                alt={title}
                src={image}
                width={714}
                height={429}
              />
            </div>

            <div className="flex flex-1 flex-col px-6 md:gap-2 md:py-2 md:px-4">
              <div className="flex flex-row-reverse items-center justify-between gap-2 md:flex-col md:items-start">
                <span className="text-zinc-500">{release_year}</span>
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <p className="py-4 text-sm dark:text-zinc-400 md:py-2">{description}</p>

              <div className="mt-auto mb-1 flex items-center gap-2 py-4 text-sm md:py-0">
                <Link
                  href={links.demo}
                  className="flex items-center gap-2 rounded-md p-2 font-bold text-sky-700 hover:bg-sky-600/10 dark:text-sky-600"
                >
                  <GlobeIcon className="h-5 w-5" />
                  <span>Demo</span>
                </Link>

                <Link
                  href={links.repo}
                  className="flex items-center gap-2 rounded-md p-2 font-bold text-sky-700 hover:bg-sky-600/10 dark:text-sky-600"
                >
                  <GithubIcon className="h-5 w-5" />
                  <span>Repo</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      {page}
    </Container>
  );
};
