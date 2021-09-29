import data from '@/data/quotes';

import Head from '@/components/Head/Head';
import Title from '@/components/Title/Title';

const Quotes = () => {
  return (
    <>
      <Head title="Quotes" description="Collection of notable quotes." />
      <Title title="Quotes" />

      <ul className="flex flex-col gap-y-10">
        {data.map((item) => (
          <li key={item.quote} className="flex flex-col gap-y-4">
            <blockquote className="py-3 border-l-4 border-gray-400 dark:border-gray-600">
              <p className="px-4 text-lg italic">{item.quote}</p>
            </blockquote>

            <p className="text-lg">{item.author}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Quotes;
