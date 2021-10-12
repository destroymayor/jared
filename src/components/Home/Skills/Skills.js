import data from '@/data/skills';

import Title from '@/components/Home/Common/Title';
import { CodeIcon } from '@heroicons/react/solid';

const Skills = () => {
  return (
    <section className="flex flex-col my-10 gap-y-3">
      <Title icon={<CodeIcon className="w-6 h-6" />} title="My Skills" />

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
};

export default Skills;
