import data from '@/data/skills';

import { CodeIcon } from '@heroicons/react/solid';

export default function Skills() {
  return (
    <section className="flex flex-col my-10 gap-y-3">
      <div className="flex items-center">
        <span className="w-8">
          <CodeIcon className="w-6 h-6" />
        </span>
        <h3 className="flex items-center justify-start text-lg font-bold sm:text-xl gap-x-2">
          My Skills
        </h3>
      </div>

      <ul className="flex flex-col gap-y-2">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col gap-y-1">
            <h3 className="font-bold text-md sm:text-lg">{item.title}</h3>
            <ul className="px-6 list-disc">
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
