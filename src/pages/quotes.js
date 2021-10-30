import data from '@/data/quotes';

const title = `Quotes`;
const description = `Collection of notable quotes.`;

Quotes.title = title;
Quotes.description = description;

export default function Quotes() {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-md sm:text-lg dark:text-gray-400">{description}</p>

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
}
