import data from '@/data/quotes';

const Quotes = () => (
  <>
    <h1 className="pb-10 text-2xl">Quotes</h1>

    <ul className="flex flex-col gap-y-14">
      {data.map((item) => (
        <li key={item.name} className="flex flex-col gap-y-6">
          <blockquote className="py-3 border-l-4 border-gray-500">
            <p className="px-4 text-xl italic">{item.quote}</p>
          </blockquote>

          <p className="text-lg">{item.author}</p>
        </li>
      ))}
    </ul>
  </>
);

export default Quotes;
