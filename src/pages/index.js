import Image from 'next/image';
import profileImage from '@/public/images/avatar.jpg';

import Link from '@/components/Common/Link';
import CircleSpring from '@/components/Common/CircleSpring';
import WorkExperience from '@/components/WorkExperience/WorkExperience';

import data from '@/data/contact';

HomePage.title = 'Jared Chen - Frontend Developer';
HomePage.description = `Hey, I'm Jared Chen. I'm a front-end developer.`;

export default function HomePage() {
  return (
    <>
      <section className="relative flex flex-col-reverse items-start gap-4 pt-4 rounded-md sm:pt-20 sm:flex-row dark:bg-opacity-0">
        <div className="flex flex-col flex-1 gap-y-4">
          <div>
            <h1 className="text-2xl sm:text-4xl">Jared Chen</h1>
            <p className="text-md sm:text-lg dark:text-gray-400">Front-end developer</p>
          </div>

          <ul className="flex flex-col items-start justify-center gap-2">
            {data.map((item) => (
              <Link key={item.link} href={item.link} aria-label={item.label}>
                <li className="flex items-center gap-2 py-2 transition duration-200 ease-in-out hover:text-gray-400">
                  {item.icon}
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
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

      <WorkExperience />
    </>
  );
}
