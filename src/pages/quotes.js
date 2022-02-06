import data from '@/data/quotes';

const title = `Quotes`;
const description = `Collection of famous quotes.`;

Quotes.title = title;
Quotes.description = description;

export default function Quotes() {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <ul className="flex flex-col gap-y-10 pb-20">
        {data.map((item) => (
          <li key={item.quote} className="flex flex-col gap-y-4">
            <blockquote className="border-l-4 border-gray-400 py-3 dark:border-gray-600">
              <p className="px-4 text-lg italic">{item.quote}</p>
            </blockquote>

            <p className="text-lg">{item.author}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
