import router from 'next/router';

const Snippets = (props) => {
  const { data } = props;

  const handleNavigation = (pathname) => router.push(pathname);

  return (
    <>
      <h1 className="pb-5 text-2xl">Snippets</h1>
      <ul className="flex flex-col gap-y-6">
        {data.map((item) => {
          const { title, description, category, pathname } = item.data;
          return (
            <li
              key={title + category}
              className="flex flex-col gap-2 p-3 transition duration-200 ease-in-out border border-gray-300 rounded-md cursor-pointer group hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-600"
              onClick={() => {
                handleNavigation(pathname);
              }}
            >
              <h3 className="text-xl text-blue-500">{title}</h3>
              <p className="text-sm">{description}</p>
              <div className="">
                <span className="text-sm font-semibold tracking-wide">Category : </span>
                <span>{category}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Snippets;
