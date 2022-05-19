import tools from '@/data/tools';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Tag from '@/components/Tag';

const title = `Tools`;
const description = `A list of my favorite tools`;

export default function Tools() {
  return (
    <div className="flex flex-col gap-2">
      {tools.map((tool) => {
        const { title, description, logo, link, tag } = tool;
        return (
          <div
            key={title}
            className="flex items-center gap-4 rounded-2xl p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900"
          >
            <span className="grid max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px] items-center rounded-2xl p-2 dark:bg-zinc-900">
              {logo}
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Link href={link}>
                  <h2 className="text-xl hover:underline">{title}</h2>
                </Link>

                {tag && <Tag label={tag.label} type={tag.type} />}
              </div>
              <p className="text-sm dark:text-zinc-400">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Tools.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />

      {page}
    </Container>
  );
};
