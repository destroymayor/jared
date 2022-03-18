import projects from '@/data/projects';

import Button from '@/components/Common/Button';
import FadeInSection from '@/components/Common/FadeInSection';
import Link from '@/components/Common/Link';
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

      <div className="flex flex-col gap-y-6">
        {projects.map((project) => (
          <FadeInSection
            className="group relative h-72 rounded-lg bg-zinc-800 bg-cover bg-center bg-no-repeat object-cover bg-blend-multiply transition duration-200 ease-in-out sm:bg-zinc-100 sm:hover:bg-zinc-700"
            style={{ backgroundImage: `url(${project.image})` }}
            key={project.title}
          >
            <div className="absolute bottom-2 flex flex-col gap-y-2 px-5 text-zinc-100 transition duration-200 ease-in-out sm:opacity-0 sm:group-hover:-translate-y-3 sm:group-hover:text-zinc-100 sm:group-hover:opacity-100">
              <h2 className="text-4xl ">{project.title}</h2>
              <p className="px-1">{project.description}</p>
              <div className="flex gap-4 py-2 text-black dark:text-gray-200">
                <Link aria-label="github link" href={project.links.repo}>
                  <Button>
                    <GithubIcon className="h-5 w-5" />
                    <span>Github</span>
                  </Button>
                </Link>

                <Link aria-label="demo link" href={project.links.demo}>
                  <Button>
                    <LinkIcon className="h-5 w-5" />
                    <span>Demo</span>
                  </Button>
                </Link>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </>
  );
}
