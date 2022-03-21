import tools from '@/data/tools';

import Link from '@/components/Common/Link';
import FadeInSection from '@/components/Common/FadeInSection';
import Tag from '@/components/Common/Tag';

const title = `Tools`;
const description = `A list of my favorite tools`;

Tools.title = title;
Tools.description = description;

export default function Tools() {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <div className="flex flex-col gap-6">
        {tools.map((tool, index) => {
          const animationDelay = `${index * 20}ms`;

          return (
            <Link href={tool.link} key={tool.title}>
              <FadeInSection className="flex items-center gap-4" delay={animationDelay}>
                <span className="grid max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px] items-center rounded-md bg-zinc-200 p-2 dark:bg-zinc-800">
                  {tool.logo}
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl">{tool.title}</h2>
                    {tool.tag && <Tag label={tool.tag.label} type={tool.tag.type} />}
                  </div>
                  <p className="text-sm dark:text-zinc-400">{tool.description}</p>
                </div>
              </FadeInSection>
            </Link>
          );
        })}
      </div>
    </>
  );
}
