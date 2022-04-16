import Image from 'next/image';
import projects from '@/data/projects';

import MainLayout from '@/layouts/main-layout';
import Link from '@/components/Common/Link';
import Tag from '@/components/Common/Tag';

import { GlobeIcon } from '@/components/Common/FeatherIcons';
import { GithubIcon } from '@/components/Common/Icons';

const title = `Projects`;
const description = `Internet thingies built with React, Next.js.`;

Projects.title = title;
Projects.description = description;

export default function Projects() {
  return (
    <>
      <div className="absolute -left-6 top-0 hidden h-[calc(100%)] min-h-[calc(100vh-0px)] w-[1px] border-l border-dashed border-zinc-300 dark:border-zinc-700 md:block" />

      <div className="flex flex-col gap-6">
        {projects.map((project) => {
          const { title, description, release_year, image, tag, links } = project;

          return (
            <div
              key={title}
              className="relative flex flex-col rounded-lg shadow-xl dark:bg-zinc-900 sm:flex-row"
            >
              <aside className="absolute -left-12 top-1/2 hidden whitespace-nowrap text-zinc-400 [transform:translate(-50%,-50%)] [writing-mode:vertical-lr] dark:text-zinc-600 md:block">
                {release_year}
              </aside>

              <Image
                className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                objectFit="cover"
                unoptimized
                priority
                alt={title}
                src={image}
                width={300}
                height={200}
              />

              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex">
                  <Tag label={tag} type="primary" />
                </div>

                <div className="flex flex-1 flex-col gap-2 pb-2">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="text-sm dark:text-zinc-400">{description}</p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Link
                    href={links.demo}
                    className="flex items-center gap-2 rounded-md p-2 font-bold text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
                  >
                    <GlobeIcon className="h-5 w-5" />
                    <span>Demo</span>
                  </Link>

                  <Link
                    href={links.repo}
                    className="flex items-center gap-2 rounded-md p-2 font-bold text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
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
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return (
    <MainLayout title={title} description={description}>
      {page}
    </MainLayout>
  );
};
