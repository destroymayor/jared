import tools from '@/data/tools';

import Link from '@/components/Common/Link';

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
        {tools.map((tool) => (
          <Link
            key={tool.title}
            className="flex animate-fade-up items-center gap-4"
            href={tool.link}
          >
            <span className="grid max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px] items-center rounded-md bg-zinc-200 p-2 dark:bg-zinc-800">
              {tool.logo}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl">{tool.title}</h2>
              <p className="text-sm dark:text-zinc-400">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
