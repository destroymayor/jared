import data from '@/data/skills';

import Title from '@/components/Home/Common/Title';
import { CodeIcon } from '@heroicons/react/solid';

const Skills = () => {
  return (
    <section className="flex flex-col p-5 my-3 text-gray-700 transition duration-150 ease-in-out bg-gray-300 rounded-md gap-y-3 dark:bg-opacity-90 dark:text-white dark:bg-gray-800 dark:hover:bg-opacity-70">
      <Title icon={<CodeIcon className="w-6 h-6" />} title="My Skills" />

      <ul className="flex flex-col gap-y-2">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col gap-y-1">
            <h3 className="font-bold">{item.title}</h3>
            <ul className="px-6 list-disc">
              {item.children.map((skill, index) => (
                <li key={skill + index.toString()}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
