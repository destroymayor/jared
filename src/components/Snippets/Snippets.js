import data from '@/data/snippets';

const Snippets = () => (
  <>
    <h1 className="pb-5 text-2xl">Snippets</h1>
    <ul className="flex flex-wrap gap-2">
      {data.map((item) => (
        <li
          key={item.name}
          className="flex flex-wrap flex-1 gap-2 p-3 text-gray-700 bg-gray-200 rounded-md cursor-pointer"
        >
          <h3 className="text-yellow-500">{item.name}</h3>
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
