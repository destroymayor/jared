import { memo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Link from '@/components/Common/Link';
import Navigation from '@/components/Layout/Navigation/Navigation';

import { HomeIcon } from '@heroicons/react/solid';

import profileImage from '@/public/images/avatar.png';

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex items-start justify-between flex-shrink-0 w-full py-8">
      <Link href="/" aria-label={'home button'}>
        {router.pathname === '/' ? (
          <Image
            className="rounded-full"
            alt="Jared Chen"
            unoptimized
            objectFit="cover"
            src={profileImage}
            width={76}
            height={76}
          />
        ) : (
          <div className="p-1 transition duration-200 ease-in-out rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300">
            <HomeIcon className="w-8 h-8" />
          </div>
        )}
      </Link>

      <Navigation />
    </header>
  );
};

export default memo(Header);
