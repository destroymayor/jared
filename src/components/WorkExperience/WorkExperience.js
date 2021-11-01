import { Fragment } from 'react';

import data from '@/data/work-experience';

import Link from '@/components/Common/Link';

import { BriefcaseIcon } from '@heroicons/react/solid';

const WorkExperience = () => {
  return (
    <section className="flex flex-col my-10 gap-y-3">
      <div className="flex items-center">
        <span className="w-8">
          <BriefcaseIcon className="w-6 h-6" />
        </span>
        <h3 className="flex items-center justify-start text-lg font-bold sm:text-xl gap-x-2">
          Work Experiences
        </h3>
      </div>

      <ul className="flex flex-col gap-y-2">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col gap-y-2">
            <div className="flex flex-wrap items-center gap-x-3">
              <h3 className="text-md sm:text-lg">{item.title}</h3>
              <span className="text-sm dark:text-gray-400">{item.year}</span>
            </div>

            <p className="text-sm dark:text-gray-400">
              <span className="pr-2">{item.description}</span>

              {item.projects.map((project, index, { length, lastIndex = length - 1 }) => (
                <Fragment key={project.product}>
                  <span>
                    <Link
                      className="underline"
                      href={project?.link ?? '/'}
                      aria-label={project.product}
                    >
                      <span>{project.product}</span>
                    </Link>
                  </span>
                  <span className="pr-1">{index !== lastIndex ? ',' : '.'}</span>
                </Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
