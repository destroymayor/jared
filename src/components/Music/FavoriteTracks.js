import { memo } from 'react';
import data from '@/data/music';

import Link from '@/components/Common/Link';

const FavoriteTracks = () => {
  return (
    <div className="flex flex-col mt-12 gap-y-2">
      <h2 className="text-2xl">Favorite tracks</h2>
      <ul className="flex flex-col gap-y-6">
        {data.map((item) => (
          <li key={item.title}>
            <Link href={item.link}>
              <div
                className="relative object-cover transition duration-200 ease-in-out bg-gray-500 bg-center bg-no-repeat bg-cover rounded-md h-60 group hover:bg-blend-multiply"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute flex flex-col px-5 transition duration-200 ease-in-out opacity-0 gap-y-2 group-hover:opacity-100 group-hover:text-gray-100 group-hover:-translate-y-3 bottom-6 left-6">
                  <p className="text-4xl font-extrabold">{item.title}</p>
                  <p className="px-1">{item.performer}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FavoriteTracks);