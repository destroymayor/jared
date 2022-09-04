import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Image from 'next/future/image';
import projects from '@/data/projects';

import Container from '@/components/Container';
import AnimateSection from '@/components/AnimateSection';
import Hero from '@/components/Hero';
import ExternalLink from '@/components/ExternalLink';

import { GlobeIcon, GithubOutlineIcon } from '@/components/Icons';

const title = `Projects`;
const description = `Internet thingies built with React, Next.js and TypeScript.`;

const Page: NextPageWithLayout = () => {
  return (
    <ul className="flex flex-col gap-10">
      {projects.map((project) => {
        const { tags, title, description, release_year, image, links } = project;

        return (
          <li key={title}>
            <AnimateSection type="revealing">
              <div className="-mx-4 -my-2">
                <Image
                  priority
                  className="rounded-md object-contain"
                  alt={title}
                  src={image}
                  width={714}
                  height={429}
                />
              </div>
            </AnimateSection>

            <div className="flex flex-col gap-2 sm:px-4">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <span className="text-zinc-600 dark:text-zinc-400">{release_year}</span>
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink
                    href={links.demo}
                    className="flex items-center gap-2 rounded-md px-2 py-1 font-bold hover:bg-sky-600/10 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <GlobeIcon className="h-5 w-5" />
                    <span>Demo</span>
                  </ExternalLink>

                  <ExternalLink
                    href={links.repo}
                    className="flex items-center gap-2 rounded-md px-2 py-1 font-bold hover:bg-sky-600/10 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <GithubOutlineIcon className="h-5 w-5" />
                    <span>Repo</span>
                  </ExternalLink>
                </div>
              </div>

              <p className="text-sm dark:text-zinc-400">{description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      {page}
    </Container>
  );
};

export default Page;
