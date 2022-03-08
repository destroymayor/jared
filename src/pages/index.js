import Image from 'next/image';
import avatar from '@/public/images/avatar.webp';

import CircleSpring from '@/components/Common/CircleSpring';
import Link from '@/components/Common/Link';

import contact from '@/data/contact';

HomePage.description = `Hey, I'm Jared Chen. I'm a front-end developer.`;

export default function HomePage() {
  return (
    <section className="relative flex flex-col-reverse items-start gap-4 rounded-md dark:bg-opacity-0 sm:flex-row sm:pt-20">
      <div className="flex flex-1 flex-col gap-y-2">
        <h1 className="pb-2 text-2xl sm:text-4xl">Jared Chen</h1>
        <h2 className="text-md text-gray-700 dark:text-gray-200">
          <span>Front-End Engineer at </span>
          <Link href="https://github.com/Tagtoo">
            <span className="font-semibold">@Tagtoo</span>
          </Link>
        </h2>

        <ul className="flex flex-col items-start justify-center gap-2">
          {contact.map((item) => (
            <Link key={item.link} href={item.link} aria-label={item.label}>
              <li className="flex items-center gap-2 py-2 transition duration-200 ease-in-out hover:text-gray-400">
                {item.icon}
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <CircleSpring>
        <div className="my-4 flex h-44 w-44 items-center justify-center sm:my-0 sm:mx-14 sm:h-32 sm:w-32">
          <Image
            className="rounded-full"
            alt="Jared Chen"
            unoptimized
            objectFit="cover"
            src={avatar.src}
            width={200}
            height={200}
          />
        </div>
      </CircleSpring>
    </section>
  );
}
