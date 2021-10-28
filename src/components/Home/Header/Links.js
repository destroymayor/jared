import Link from '@/components/Common/Link';

import data from '@/data/contact';

const Links = () => {
  return (
    <ul className="flex flex-col justify-center gap-2">
      {data.map((item) => (
        <Link key={item.link} href={item.link} aria-label={item.label}>
          <li className="flex items-center gap-2 py-2 transition duration-200 ease-in-out hover:text-gray-400">
            {item.icon}
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Links;
