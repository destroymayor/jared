import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Image from 'next/image';
import Link from 'next/link';

import projects from '@/data/projects';

import Container from '@/components/Container';
import AnimateSection from '@/components/AnimateSection';
import Hero from '@/components/Hero';

import { ArrowRightIcon } from '@/components/Icons';

const title = `Projects`;
const description = `Internet thingies built with React, Next.js and TypeScript.`;

const Page: NextPageWithLayout = () => {
  return (
    <ul className="flex flex-col gap-14 pt-8">
      {projects.map((project) => {
        const { built_with, title, description, image, links } = project;

        return (
          <li key={title} className="flex flex-col gap-8">
            <div className="flex gap-6">
              <span className="min-h-[24px] min-w-[24px]">{built_with}</span>

              <div className="flex flex-col gap-5">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="max-w-[60ch] text-sm dark:text-zinc-400">{description}</p>
                <div className="flex flex-col items-start gap-4 text-sm dark:text-zinc-400">
                  <Link
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md font-bold transition duration-300 ease-in-out hover:translate-x-2"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    <span>{title} website</span>
                  </Link>

                  <Link
                    href={links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md font-bold transition duration-300 ease-in-out hover:translate-x-2"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    <span>{title} Repo</span>
                  </Link>
                </div>
              </div>
            </div>

            <AnimateSection type="revealing">
              <div className="-m-4 grid place-items-center">
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
