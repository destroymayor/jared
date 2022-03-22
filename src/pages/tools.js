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

      <div className="flex flex-col gap-2">
        {tools.map((tool, index) => {
          const animationDelay = `${index * 20}ms`;

          return (
            <FadeInSection
              key={tool.title}
              className="flex items-center gap-4 rounded-md p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900"
              delay={animationDelay}
            >
              <span className="grid max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px] items-center rounded-md p-2 dark:bg-zinc-800">
                {tool.logo}
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Link href={tool.link}>
                    <h2 className="text-xl hover:underline">{tool.title}</h2>
                  </Link>

                  {tool.tag && <Tag label={tool.tag.label} type={tool.tag.type} />}
                </div>
                <p className="text-sm dark:text-zinc-400">{tool.description}</p>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </>
  );
}
