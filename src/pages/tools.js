import tools from '@/data/tools';

import Link from '@/components/Common/Link';
import Tag from '@/components/Common/Tag';

const title = `Tools`;
const description = `A list of my favorite tools`;

Tools.title = title;
Tools.description = description;

export default function Tools() {
  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      <div className="flex flex-col gap-2">
        {tools.map((tool) => {
          return (
            <div
              key={tool.title}
              className="flex items-center gap-4 rounded-2xl p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900"
            >
              <span className="grid max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px] items-center rounded-2xl p-2 dark:bg-zinc-900">
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
            </div>
          );
        })}
      </div>
    </>
  );
}
