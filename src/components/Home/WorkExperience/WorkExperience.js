import { Fragment } from 'react';

import data from '@/data/work-experience';

import Link from '@/components/Common/Link';

import Title from '@/components/Home/Common/Title';
import { BriefcaseIcon } from '@heroicons/react/solid';

const WorkExperience = () => {
  return (
    <section className="flex flex-col p-5 my-3 text-gray-700 transition duration-150 ease-in-out bg-gray-300 rounded-md gap-y-3 dark:bg-opacity-90 dark:text-white dark:bg-gray-800 dark:hover:bg-opacity-70">
      <Title icon={<BriefcaseIcon className="w-6 h-6" />} title="Work Experiences" />

      <ul className="flex flex-col gap-y-2">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col gap-y-2">
            <div className="flex flex-wrap items-center gap-x-3">
              <h3 className="text-lg">{item.title}</h3>
              <span className="text-sm text-gray-700 dark:text-gray-100">{item.year}</span>
            </div>
            <div className="text-sm dark:text-gray-100">
              {item.description}

              <div className="flex py-1">
                {item.projects.map((project, index, { length, lastIndex = length - 1 }) => (
                  <Fragment key={project.product}>
                    <span>
                      <Link
                        className="underline"
                        href={project?.link ?? ''}
                        aria-label={project.product}
                      >
                        <h4>{project.product}</h4>
                      </Link>
                    </span>
                    {index !== lastIndex && <span className="pr-1">,</span>}
                  </Fragment>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
