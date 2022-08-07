import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Image from 'next/future/image';
import projects from '@/data/projects';

import Container from '@/components/Container';
import FadeInContainer from '@/components/FadeInContainer';
import Hero from '@/components/Hero';
import ExternalLink from '@/components/ExternalLink';
import Tag from '@/components/Tag';

import { GlobeIcon, GithubOutlineIcon } from '@/components/Icons';

const title = `Projects`;
const description = `Internet thingies built with React, Next.js.`;

const Page: NextPageWithLayout = () => {
  return (
    <ul className="flex flex-col gap-10">
      {projects.map(
        (project: {
          tags: string[];
          title: string;
          description: string;
          release_year: number;
          image: string;
          links: {
            demo: string;
            repo: string;
          };
        }) => {
          const { tags, title, description, release_year, image, links } = project;

          return (
            <li key={title}>
              <FadeInContainer className="-mx-4">
                <Image
                  className="rounded-md object-contain"
                  alt={title}
                  src={image}
                  width={714}
                  height={429}
                />
              </FadeInContainer>

              <div className="flex flex-col gap-2 sm:gap-4 sm:px-2">
                <div className="flex flex-wrap justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>

                  <span className="text-zinc-600 dark:text-zinc-400">{release_year}</span>
                </div>

                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm dark:text-zinc-400">{description}</p>

                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink
                    href={links.demo}
                    className="flex items-center gap-2 rounded-md p-2 font-bold hover:bg-sky-600/10 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <GlobeIcon className="h-5 w-5" />
                    <span>Demo</span>
                  </ExternalLink>

                  <ExternalLink
                    href={links.repo}
                    className="flex items-center gap-2 rounded-md p-2 font-bold hover:bg-sky-600/10 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <GithubOutlineIcon className="h-5 w-5" />
                    <span>Repo</span>
                  </ExternalLink>
                </div>
              </div>
            </li>
          );
        }
      )}
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
