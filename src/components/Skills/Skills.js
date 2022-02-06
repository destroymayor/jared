import data from '@/data/skills';

import { CodeIcon } from '@heroicons/react/solid';

export default function Skills() {
  return (
    <section className="my-10 flex flex-col gap-y-3">
      <div className="flex items-center">
        <span className="w-8">
          <CodeIcon className="h-6 w-6" />
        </span>
        <h3 className="flex items-center justify-start gap-x-2 text-lg font-bold sm:text-xl">
          My Skills
        </h3>
      </div>

      <ul className="flex flex-col gap-y-2">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col gap-y-1">
            <h3 className="text-md font-bold sm:text-lg">{item.title}</h3>
            <ul className="list-disc px-6">
              {item.children.map((skill, index) => (
                <li className="text-md sm:text-lg" key={skill + index.toString()}>
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
