import data from '@/data/education';

import Title from '@/components/Home/Common/Title';
import { AcademicCapIcon } from '@heroicons/react/solid';

const Education = () => {
  return (
    <section className="flex flex-col p-5 my-3 text-gray-700 bg-gray-300 rounded-md dark:bg-opacity-90 dark:text-white dark:bg-gray-800 gap-y-3">
      <Title icon={<AcademicCapIcon className="w-6 h-6" />} title="Education" />

      <ul className="flex flex-col gap-y-2">
        {data.map((item) => (
          <li key={item.title}>
            <div>{item.title}</div>
            <span className="text-gray-700 dark:text-gray-200">{item.degree}</span>
            <div className="text-sm">{item.year}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
