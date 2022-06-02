import uses from '@/data/uses';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Tag from '@/components/Tag';

const title = `Uses`;
const description = `A list of tech equipment I currently use.`;

export default function Uses() {
  const { equipment, applications } = uses;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="bg-gradient-to-r from-sky-600 to-green-600 bg-clip-text text-2xl font-extrabold text-transparent">
          Equipment
        </h2>
        <ul className="ml-4 flex list-disc flex-col gap-4">
          {equipment.map((item) => {
            const { title, description, tag } = item;
            return (
              <li key={title}>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="md:text-lg">{title}</h3>
                    <Tag label={tag.label} type={tag.type} />
                  </div>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="bg-gradient-to-r from-sky-600 to-green-600 bg-clip-text text-2xl font-extrabold text-transparent">
          Applications
        </h2>
        <ul>
          {applications.map((app) => {
            const { title, description, logo, link, tag } = app;
            return (
              <li
                key={title}
                className="flex gap-4 rounded-2xl py-2 md:hover:bg-zinc-200 md:dark:hover:bg-zinc-900"
              >
                <span className="grid max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px] items-center rounded-2xl p-2 dark:bg-zinc-900">
                  {logo}
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href={link}>
                      <h3 className="hover:underline md:text-lg">{title}</h3>
                    </Link>

                    {tag && <Tag label={tag.label} type={tag.type} />}
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Uses.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      {page}
    </Container>
  );
};
