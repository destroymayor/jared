import Image from 'next/image';
import profileImage from '@/public/images/avatar.jpg';

import Links from '@/components/Home/Header/Links';
import CircleSpring from '@/components/Common/CircleSpring';

const Header = () => {
  return (
    <section className="relative flex flex-col-reverse items-start gap-4 pt-10 rounded-md sm:pt-32 sm:flex-row dark:bg-opacity-0">
      <div className="flex flex-col flex-1 gap-y-4">
        <div>
          <h1 className="text-2xl sm:text-4xl">Jared Chen</h1>
          <p className="text-md sm:text-lg dark:text-gray-400">Front-end developer</p>
        </div>
        <Links />
      </div>

      <div className="w-[100px] sm:mt-6">
        <CircleSpring delay={300}>
          <Image
            className="rounded-full"
            alt="Jared Chen"
            unoptimized
            objectFit="cover"
            src={profileImage}
            width={100}
            height={100}
          />
        </CircleSpring>
      </div>
    </section>
  );
};

export default Header;
