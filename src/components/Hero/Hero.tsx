type Props = {
  title: string;
  description: string;
};

export default function Hero(props: Props) {
  const { title, description } = props;

  return (
    <div className="pt-2 md:pt-8">
      <h1 className="py-2 text-4xl font-extrabold">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
    </div>
  );
}
