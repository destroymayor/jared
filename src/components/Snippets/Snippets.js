import data from '@/data/snippets';

const Snippets = () => (
  <>
    <h1 className="pb-5 text-2xl">Snippets</h1>
    <ul className="flex flex-col gap-2">
      {data.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-2 p-3 bg-gray-300 rounded-md cursor-pointer dark:bg-gray-600"
        >
          <h3 className="text-blue-500">{item.title}</h3>
          <p className="text-sm">{item.description}</p>
          <div className="">
            <span className="text-sm font-semibold tracking-wide">Category : </span>
            <span>{item.category}</span>
          </div>
        </li>
      ))}
    </ul>
  </>
);

export default Snippets;
