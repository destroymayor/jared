import { Fragment } from 'react';

import data from '@/data/work-experience';

import Link from '@/components/Common/Link';

import Title from '@/components/Home/Common/Title';
import { BriefcaseIcon } from '@heroicons/react/solid';

const WorkExperience = () => {
  return (
    <section className="flex flex-col my-10 gap-y-3">
      <Title icon={<BriefcaseIcon className="w-6 h-6" />} title="Work Experiences" />

      <ul className="flex flex-col gap-y-2">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col gap-y-2">
            <div className="flex flex-wrap items-center gap-x-3">
              <h3 className="text-lg">{item.title}</h3>
              <span className="text-sm dark:text-gray-400">{item.year}</span>
            </div>
            <p className="text-sm dark:text-gray-400">
              {item.description}

              <span className="flex py-1">
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
                    {index !== lastIndex && <span className="pr-1">,</span>}
                  </Fragment>
                ))}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
