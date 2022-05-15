export default function Hero(props) {
  const { title, description } = props;

  return (
    <div className="pt-2 md:pt-12">
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 text-sm dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
    </div>
  );
}
