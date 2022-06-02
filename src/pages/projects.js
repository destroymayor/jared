import Image from 'next/image';
import projects from '@/data/projects';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Tag from '@/components/Tag';

import { GlobeIcon, GithubIcon } from '@/components/FeatherIcons';

const title = `Projects`;
const description = `Internet thingies built with React, Next.js.`;
export default function Projects() {
  return (
    <div className="flex flex-col gap-14">
      {projects.map((project) => {
        const { title, description, release_year, image, tags, links } = project;

        return (
          <div key={title} className="relative flex flex-col md:flex-row">
            <div className="flex flex-col">
              <Image
                className="rounded-md shadow-md"
                objectFit="cover"
                unoptimized
                priority
                alt={title}
                src={image}
                width={400}
                height={240}
              />

              <div className="flex flex-wrap items-center gap-1 px-4">
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} type="primary" />
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 pt-2">
              <span className="whitespace-nowrap text-zinc-400 dark:text-zinc-500">
                {release_year}
              </span>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="py-2 text-sm dark:text-zinc-400">{description}</p>

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
