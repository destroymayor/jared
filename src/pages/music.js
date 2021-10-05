import { memo } from 'react';
import data from '@/data/music';

import Head from '@/components/Head/Head';
import Link from '@/components/Common/Link';
import Title from '@/components/Title/Title';

const Music = () => {
  return (
    <>
      <Head title="Music" description="Collection of electronic dance music." />
      <Title title="Music" />

      <ul className="flex flex-col gap-y-6">
        {data.map((item) => (
          <li key={item.title}>
            <Link href={item.link}>
              <div
                className={`
                relative
                h-60
                group
                object-cover
                transition
                duration-200
                ease-in-out
                bg-gray-500
                bg-center
                bg-no-repeat
                bg-cover
                rounded-md
                hover:bg-blend-multiply
                `}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div
                  className={`
                  absolute
                  flex
                  flex-col
                  px-5
                  transition
                  duration-200
                  ease-in-out
                  opacity-0
                  gap-y-2
                  group-hover:opacity-100
                  group-hover:text-gray-100
                  group-hover:-translate-y-3
                  bottom-6
                  left-6`}
                >
                  <p className="text-4xl font-extrabold">{item.title}</p>
                  <p className="px-1">{item.performer}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Music);
