import Progress from '@/components/CodingActive/Progress';

const CodingActiveList = (props) => {
  const { data } = props;

  const actives = [
    { title: 'Languages', data: data.languages },
    { title: 'Editor', data: data.editors },
  ];

  return (
    <>
      {actives.map((item) => (
        <div key={item.title} className="my-2 flex animate-fade-up flex-col gap-2">
          <p className="dark:text-zinc-400">{item.title}</p>
          <ul className="flex flex-col gap-1 sm:ml-6 sm:list-disc">
            {item?.data?.map((subItem) => (
              <li key={subItem.name}>
                <div className="grid grid-cols-4 gap-x-4 gap-y-1 sm:grid-cols-7 sm:gap-2">
                  <div className="col-span-2 text-sm">{subItem.name}</div>
                  <div className="col-span-2 text-right text-sm sm:text-left">{subItem.text}</div>
                  <div className="col-span-4 sm:col-span-3">
                    <Progress percent={subItem.percent} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CodingActiveList;
