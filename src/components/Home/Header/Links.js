import Link from '@/components/Common/Link';

import data from '@/data/social-media';

const Links = () => {
  return (
    <ul className="flex items-center">
      {data.map((item) => (
        <li key={item.link}>
          <Link
            className={`
            flex
            items-center
            p-2
            transition
            duration-200
            ease-in-out
            origin-center
            transform
            rounded-full
            hover:bg-blue-500
            hover:text-gray-200
            dark:hover:bg-blue-500
            hover:scale-150
            `}
            href={item.link}
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
