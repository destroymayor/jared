import data from '@/data/projects';

import Link from '@/components/Common/Link';
import Head from '@/components/Head/Head';
import Title from '@/components/Title/Title';
import { GithubIcon } from '@/components/Common/Icons';
import { LinkIcon } from '@heroicons/react/outline';

const Projects = () => {
  return (
    <>
      <Head title="Projects" description="My side projects." />
      <Title title="Projects" />

      <ul className="flex flex-col gap-y-6">
        {data.map((item) => (
          <li
            className="relative object-cover transition duration-200 ease-in-out bg-gray-700 bg-no-repeat bg-cover border border-gray-600 rounded-md h-72 hover:bg-blend-multiply group"
            style={{ backgroundImage: `url(${item.image})` }}
            key={item.title}
          >
            <div className="absolute flex flex-col px-5 transition duration-200 ease-in-out opacity-0 gap-y-2 group-hover:opacity-100 group-hover:-translate-y-3 bottom-6 left-6 group-hover:text-gray-100">
              <h2 className="text-4xl">{item.title}</h2>
              <p className="px-1">{item.description}</p>
              <div className="flex gap-2 py-2">
                <Link
                  aria-label="github link"
                  className="p-2 transition duration-200 ease-in-out origin-center transform rounded-full hover:bg-blue-500 dark:hover:bg-blue-500 hover:scale-150"
                  href={item.links.repo}
                >
                  <GithubIcon className="w-6 h-6" />
                </Link>
                <Link
                  aria-label="demo link"
                  className="p-2 transition duration-200 ease-in-out origin-center transform rounded-full hover:bg-blue-500 dark:hover:bg-blue-500 hover:scale-150"
                  href={item.links.demo}
                >
                  <LinkIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
