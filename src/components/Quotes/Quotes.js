import data from '@/data/quotes';

const Quotes = () => (
  <>
    <h1 className="pb-5 text-2xl">Quotes</h1>

    <ul className="flex flex-col gap-y-10">
      {data.map((item) => (
        <li key={item.quote} className="flex flex-col gap-y-4">
          <blockquote className="py-3 border-l-4 border-gray-500">
            <p className="px-4 text-lg italic">{item.quote}</p>
          </blockquote>

          <p className="text-lg">{item.author}</p>
        </li>
      ))}
    </ul>
  </>
);

export default Quotes;
