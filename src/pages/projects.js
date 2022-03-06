import data from '@/data/projects';

import Button from '@/components/Common/Button';
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

      <ul className="flex flex-col gap-y-6">
        {data.map((item) => (
          <li
            className="group relative h-72 rounded-lg bg-gray-800 bg-cover bg-no-repeat object-cover transition duration-200 ease-in-out hover:bg-blend-multiply"
            style={{ backgroundImage: `url(${item.image})` }}
            key={item.title}
          >
            <div className="absolute bottom-2 flex flex-col gap-y-2 px-5 opacity-0 transition duration-200 ease-in-out group-hover:-translate-y-3 group-hover:text-gray-100 group-hover:opacity-100">
              <h2 className="text-4xl">{item.title}</h2>
              <p className="px-1">{item.description}</p>
              <div className="flex gap-4 py-2">
                <Link aria-label="github link" href={item.links.repo}>
                  <Button>
                    <GithubIcon className="h-6 w-6" />
                    <span>Github</span>
                  </Button>
                </Link>

                <Link aria-label="demo link" href={item.links.demo}>
                  <Button>
                    <LinkIcon className="h-6 w-6" />
                    <span>Demo</span>
                  </Button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
