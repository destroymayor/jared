import { memo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import CircleSpring from '@/components/Common/CircleSpring';
import Link from '@/components/Common/Link';
import Navigation from '@/components/Layout/Navigation/Navigation';

import profileImage from '@/public/images/avatar.jpg';

const Header = () => {
  const router = useRouter();

  const profileImageSize = router.pathname === '/' ? 76 : 50;

  return (
    <header className="flex items-start justify-between flex-shrink-0 w-11/12 py-8 md:max-w-2xl">
      <Link href="/" aria-label={'home button'}>
        <CircleSpring delay={300}>
          <Image
            className="rounded-full"
            alt="Jared Chen"
            unoptimized
            objectFit="cover"
            src={profileImage}
            width={profileImageSize}
            height={profileImageSize}
          />
        </CircleSpring>
      </Link>

      <Navigation />
    </header>
  );
};

export default memo(Header);
