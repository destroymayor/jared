export const metadata = {
  title: 'Projects',
  description: 'Internet thingies built with React, Next.js and TypeScript.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const { title, description } = metadata;

  return (
    <>
      <div className="pt-2 md:pt-8">
        <h1 className="py-2 text-4xl font-extrabold">{title}</h1>
        <p className="max-w-[60ch] pt-2 dark:text-zinc-400">{description}</p>
        <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
      </div>
      {children}
    </>
  );
}
